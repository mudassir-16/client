import puppeteer from "puppeteer-core";

async function testMobileMenu() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await new Promise((r) => setTimeout(r, 1000));

  const menuBtn = await page.$('button[aria-label="Open mobile menu"]');
  console.log("Menu button exists:", !!menuBtn);
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 600));

    const overlayInfo = await page.evaluate(() => {
      const el = document.querySelector(".fixed.inset-0");
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        display: style.display,
        opacity: style.opacity,
        visibility: style.visibility,
        zIndex: style.zIndex,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        className: el.className,
        htmlSnippet: el.outerHTML.slice(0, 500),
      };
    });
    console.log("Overlay info:", JSON.stringify(overlayInfo, null, 2));

    await page.screenshot({ path: "public/mobile_menu_debug.png" });
    console.log("Saved screenshot to public/mobile_menu_debug.png");
  }

  await browser.close();
}

testMobileMenu().catch(console.error);
