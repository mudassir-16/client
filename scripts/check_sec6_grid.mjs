import fs from 'fs';

const html = fs.readFileSync('sec6.html', 'utf8');

const blocks = [
  'fe-block-yui_3_17_2_1_1728329624987_330507',
  'fe-block-yui_3_17_2_1_1728329624987_322107',
  'fe-block-yui_3_17_2_1_1728329624987_334674',
  'fe-block-8f9b4f402c84b3ecc09f',
  'fe-block-8b42a43928e2968a72b9',
  'fe-block-yui_3_17_2_1_1728329624987_350661'
];

blocks.forEach(b => {
  const matches = [...html.matchAll(new RegExp(`\\.${b}[\\s\\S]*?grid-area:\\s*([^;]+);`, 'g'))].map(m => m[1]);
  console.log(b, 'grid areas:', matches);
});
