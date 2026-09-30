import fs from 'fs';

const html = fs.readFileSync('sec6.html', 'utf8');

const theme = html.match(/data-section-theme=["']([^"']+)["']/i);
console.log('Section theme:', theme ? theme[1] : null);

const blocks = [...html.matchAll(/<div class="fe-block ([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)].map(m => {
  const cls = m[1];
  const inner = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const imgMatch = m[2].match(/src=["']([^"']+)["']/i);
  return {
    cls,
    text: inner.substring(0, 80),
    img: imgMatch ? imgMatch[1] : null
  };
});

console.log('Sec 6 blocks:', blocks);
