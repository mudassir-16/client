import puppeteer from "puppeteer-core";

async function inspectParentContext() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.click('button[aria-label="Open mobile menu"]');
  await new Promise((r) => setTimeout(r, 600));

  const debug = await page.evaluate(() => {
    const overlay = document.querySelector(".fixed.inset-0");
    const computed = window.getComputedStyle(overlay);
    const parent = overlay.parentElement;
    const parentComputed = window.getComputedStyle(parent);

    return {
      overlay: {
        top: computed.top,
        left: computed.left,
        right: computed.right,
        bottom: computed.bottom,
        width: computed.width,
        height: computed.height,
        position: computed.position,
      },
      parent: {
        tagName: parent.tagName,
        position: parentComputed.position,
        height: parentComputed.height,
        transform: parentComputed.transform,
        filter: parentComputed.filter,
        backdropFilter: parentComputed.backdropFilter,
        perspective: parentComputed.perspective,
        contain: parentComputed.contain,
        willChange: parentComputed.willChange,
      },
    };
  });
  console.log(JSON.stringify(debug, null, 2));
  await browser.close();
}

inspectParentContext().catch(console.error);
