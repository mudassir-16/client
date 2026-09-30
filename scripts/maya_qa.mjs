import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.resolve('public', 'maya_qa_screenshots');

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
  console.log('Launching Chrome for Maya Reynolds QA verification...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000)); // allow initial render to settle

  const results = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 400)); // allow responsive layout reflow

    // Check overflow
    const overflowInfo = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      const hasHorizontalScroll = scrollWidth > innerWidth;

      const overflowingElements = [];
      const allElements = document.querySelectorAll('*');
      for (const el of allElements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > innerWidth + 1) {
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
        overflowCount: overflowingElements.length,
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

  // 1440px Full Page Screenshot
  console.log('\nCapturing 1440px full page screenshot...');
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'maya_fullpage_1440.png'), fullPage: true });

  // Test FAQ Accordion click
  console.log('\nTesting FAQ Accordion toggle...');
  const faqButtons = await page.$$('#faqs button');
  if (faqButtons.length > 1) {
    await faqButtons[1].click(); // click 2nd FAQ
    await new Promise(r => setTimeout(r, 400));
    console.log('Clicked 2nd FAQ accordion item.');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'faq_accordion_open.png') });
  }

  // Test Mobile Menu Drawer
  console.log('\nTesting Mobile Menu Drawer on 390x844...');
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 400));

  const hamburger = await page.$('button[aria-label="Open mobile menu"]');
  console.log('Mobile hamburger button found:', !!hamburger);
  if (hamburger) {
    await hamburger.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_menu_open.png') });
    console.log('Captured mobile menu open screenshot.');

    const closeBtn = await page.$('button[aria-label="Close mobile menu"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 400));
      console.log('Mobile menu closed via close button.');
    }
  }

  // Verify H1 and Key Content
  const audit = await page.evaluate(() => {
    const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim().replace(/\n/g, ' '));
    const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim().replace(/\n/g, ' '));
    const ourOffice = document.querySelector('#our-office');
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt')
    }));

    return {
      h1Count: h1s.length,
      h1s,
      h2Count: h2s.length,
      h2s,
      hasOurOfficeSection: !!ourOffice,
      totalImages: images.length,
      images
    };
  });

  console.log('\n--- CONTENT & SEO AUDIT ---');
  console.log(`H1 Count: ${audit.h1Count} (must be exactly 1)`);
  console.log(`H1 Text: "${audit.h1s[0]}"`);
  console.log(`Our Office section exists: ${audit.hasOurOfficeSection}`);
  console.log(`Total images on page: ${audit.totalImages}`);
  console.log('\nH2 Headings:');
  audit.h2s.forEach((h, i) => console.log(`  ${i + 1}. ${h}`));

  await browser.close();
  console.log('\nAll QA tests completed successfully!');
}

run().catch(err => {
  console.error('QA Test failed:', err);
  process.exit(1);
});
