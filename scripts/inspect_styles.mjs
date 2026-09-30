import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');

// Find color codes (hex, rgb, hsl)
const hexes = html.match(/#(?:[0-9a-fA-F]{3,8})\b/g) || [];
const hexCounts = {};
hexes.forEach(h => {
  const norm = h.toLowerCase();
  hexCounts[norm] = (hexCounts[norm] || 0) + 1;
});

const sortedHex = Object.entries(hexCounts).sort((a,b) => b[1] - a[1]).slice(0, 30);
console.log('Top colors:', sortedHex);

// Find font usages
const fontFamilies = html.match(/font-family:[^;]+/g) || [];
console.log('Font families:', [...new Set(fontFamilies)].slice(0, 10));

// Find h1, h2, h3 styles or classes
const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
  tag: m[1],
  content: m[2].replace(/<[^>]+>/g, '').trim().substring(0, 60),
  raw: m[0].substring(0, 100)
}));
console.log('Headings:', headings);
