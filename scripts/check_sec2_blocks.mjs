import fs from 'fs';

const html = fs.readFileSync('sec2.html', 'utf8');
const blocks = [...html.matchAll(/<div class="fe-block ([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)].map(m => {
  const cls = m[1];
  const inner = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const imgMatch = m[2].match(/src=["']([^"']+)["']/i);
  const gridDesktop = html.match(new RegExp(`@media \\(min-width: 768px\\)[\\s\\S]*?\\.${cls}[\\s\\S]*?grid-area:\\s*([^;]+);`));
  const gridMobile = html.match(new RegExp(`\\.${cls}[\\s\\S]*?grid-area:\\s*([^;]+);`));
  return {
    cls,
    text: inner.substring(0, 80),
    img: imgMatch ? imgMatch[1] : null,
    desktopGrid: gridDesktop ? gridDesktop[1] : null,
    mobileGrid: gridMobile ? gridMobile[1] : null
  };
});

console.log('Sec 2 blocks:', blocks);
