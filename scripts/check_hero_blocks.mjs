import fs from 'fs';

const html = fs.readFileSync('sec1.html', 'utf8');
const blocks = [...html.matchAll(/<div class="fe-block ([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)].map(m => {
  const cls = m[1];
  const inner = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const imgMatch = m[2].match(/src=["']([^"']+)["']/i);
  return {
    cls,
    text: inner.substring(0, 100),
    img: imgMatch ? imgMatch[1] : null
  };
});

console.log('Hero blocks:', blocks);
