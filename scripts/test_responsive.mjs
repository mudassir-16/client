import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.resolve('public', 'qa_screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const viewports = [
  // Desktop
  { name: 'desktop_1440', width: 1440, height: 900 },
  { name: 'desktop_1366', width: 1366, height: 768 },
  { name: 'desktop_1280', width: 1280, height: 800 },
  // Tablet
  { name: 'tablet_1024', width: 1024, height: 768 },
  { name: 'tablet_834', width: 834, height: 1194 },
  { name: 'tablet_768', width: 768, height: 1024 },
  // Mobile
  { name: 'mobile_430', width: 430, height: 932 },
  { name: 'mobile_390', width: 390, height: 844 },
  { name: 'mobile_375', width: 375, height: 667 },
  { name: 'mobile_320', width: 320, height: 568 },
];

async function run() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const results = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Check overflow
    const overflowInfo = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      const hasHorizontalScroll = scrollWidth > innerWidth;

      // Find overflowing elements if any
      const overflowingElements = [];
      const allElements = document.querySelectorAll('*');
      for (const el of allElements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > innerWidth + 1) { // 1px tolerance for subpixel rounding
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: (el.className || '').toString().slice(0, 50),
            right: rect.right,
            excess: rect.right - innerWidth
          });
        }
      }

      return {
        scrollWidth,
        innerWidth,
        hasHorizontalScroll,
        overflowingElementsCount: overflowingElements.length,
        topOverflowing: overflowingElements.slice(0, 3)
      };
    });

    // Capture screenshot
    const screenshotPath = path.join(SCREENSHOT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    console.log(`[${vp.name}] ${vp.width}x${vp.height}: scrollWidth=${overflowInfo.scrollWidth}, innerWidth=${overflowInfo.innerWidth}, overflow=${overflowInfo.hasHorizontalScroll ? 'YES' : 'NO'}`);
    if (overflowInfo.hasHorizontalScroll) {
      console.log('  Overflow elements:', JSON.stringify(overflowInfo.topOverflowing));
    }

    results.push({
      ...vp,
      ...overflowInfo,
      screenshot: screenshotPath
    });
  }

  // Mobile menu interaction test on 390px
  console.log('\nTesting mobile menu drawer interaction on 390x844...');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Check if hamburger button is visible
  const hamburger = await page.$('button[aria-label="Open mobile menu"]');
  console.log('Hamburger button found:', !!hamburger);
  if (hamburger) {
    await hamburger.click();
    await new Promise(r => setTimeout(r, 600)); // wait for slide animation
    const drawerOpen = await page.evaluate(() => {
      const drawer = document.querySelector('div.fixed.inset-y-0.right-0');
      return !!drawer;
    });
    console.log('Mobile drawer opened:', drawerOpen);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_drawer_open.png') });

    // Test accordion or close
    const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 600));
      console.log('Mobile drawer closed via close button.');
    }
  }

  // Desktop dropdown hover test on 1440px
  console.log('\nTesting desktop dropdown menu interaction on 1440x900...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const ourTeamBtn = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const teamBtn = buttons.find(b => b.textContent.includes('Our Team'));
    return !!teamBtn;
  });
  console.log('Our Team nav button found:', ourTeamBtn);

  // Hover Our Team
  const teamButtons = await page.$$('button');
  for (const btn of teamButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('Our Team')) {
      await btn.hover();
      await new Promise(r => setTimeout(r, 300));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_dropdown_hover.png') });
      console.log('Hovered Our Team and captured screenshot.');
      break;
    }
  }

  await browser.close();
  console.log('\nResponsive test run completed successfully!');
}

run().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
