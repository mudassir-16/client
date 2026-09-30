import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.resolve('public', 'qa_screenshots');

async function inspectAndCapture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Capture Full Page Screenshot
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'clone_fullpage_1440.png'),
    fullPage: true
  });
  console.log('Captured clone_fullpage_1440.png');

  // 2. Validate all interactive elements (links, buttons)
  const interactiveData = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.innerText.trim().replace(/\n/g, ' '),
      href: a.getAttribute('href'),
      target: a.getAttribute('target')
    }));

    const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
      text: b.innerText.trim().replace(/\n/g, ' '),
      ariaLabel: b.getAttribute('aria-label'),
      className: b.className
    }));

    // Check headings styles
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(h => {
      const style = window.getComputedStyle(h);
      return {
        tag: h.tagName,
        text: h.innerText.slice(0, 40),
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        color: style.color
      };
    });

    // Check buttons computed styles
    const btnElements = Array.from(document.querySelectorAll('.btn-primary, .btn-secondary')).map(b => {
      const style = window.getComputedStyle(b);
      return {
        text: b.innerText.trim(),
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        backgroundColor: style.backgroundColor,
        color: style.color,
        border: style.border,
        letterSpacing: style.letterSpacing,
        textTransform: style.textTransform
      };
    });

    return {
      totalLinks: links.length,
      linksSample: links.slice(0, 15),
      totalButtons: buttons.length,
      buttons,
      headingsSample: headings,
      btnElements
    };
  });

  console.log('\n--- INTERACTIVE ELEMENTS REPORT ---');
  console.log(`Total Links: ${interactiveData.totalLinks}`);
  console.log(`Total Buttons: ${interactiveData.totalButtons}`);
  console.log('\nButtons:', JSON.stringify(interactiveData.buttons, null, 2));
  console.log('\nComputed Button Styles:', JSON.stringify(interactiveData.btnElements, null, 2));
  console.log('\nHeadings Sample (Styles):', JSON.stringify(interactiveData.headingsSample.slice(0, 6), null, 2));

  await browser.close();
}

inspectAndCapture().catch(console.error);
