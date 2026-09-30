import fs from 'fs';

const html = fs.readFileSync('sec4_5.html', 'utf8');

const blocks = [...html.matchAll(/@media \(min-width: 768px\) \{[\s\S]*?\.fe-block-([^ ]+) \{[\s\S]*?grid-area:\s*([^;]+);/g)].map(m => ({
  block: m[1],
  grid: m[2]
}));

console.log('Desktop grids:', blocks);
