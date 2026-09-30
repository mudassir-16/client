import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)].map(m => m[0]);
fs.writeFileSync('sec7_8.html', sections[6] + '\n\n' + sections[7]);
console.log('Saved sec7_8.html');
