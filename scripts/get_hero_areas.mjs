import fs from 'fs';

const html = fs.readFileSync('sec1.html', 'utf8');

const blocks = [
  'fe-block-yui_3_17_2_1_1728329027525_8139',
  'fe-block-9564345a748403b0e7bb',
  'fe-block-124697bcbb528b821fdc',
  'fe-block-yui_3_17_2_1_1728329624987_7398',
  'fe-block-50cb5ccf042e9e731869'
];

blocks.forEach(b => {
  const matches = [...html.matchAll(new RegExp(`\\.${b}[\\s\\S]*?grid-area:\\s*([^;]+);`, 'g'))].map(m => m[1]);
  console.log(b, 'grid areas:', matches);
});
