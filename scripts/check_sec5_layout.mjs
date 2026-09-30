import fs from 'fs';

const html = fs.readFileSync('sec4_5.html', 'utf8');
const lines = html.split('\n');
const sec5Lines = lines.slice(lines.findIndex(l => l.includes('Our areas of expertise')) - 50);
fs.writeFileSync('sec5_part.html', sec5Lines.join('\n'));
console.log('Saved sec5_part.html');
