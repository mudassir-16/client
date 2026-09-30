import fs from 'fs';

const html = fs.readFileSync('sec7_8.html', 'utf8');
const desktopBlocks = [...html.matchAll(/@media \(min-width: 768px\) \{[\s\S]*?\.fe-block-([^ ]+) \{[\s\S]*?grid-area:\s*([^;]+);/g)].map(m => ({
  block: m[1],
  grid: m[2]
}));

console.log('Sec 8 desktop grids:', desktopBlocks);
