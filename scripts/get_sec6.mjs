import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)].map(m => m[0]);
fs.writeFileSync('sec6.html', sections[5]);
console.log('Saved sec6.html');
