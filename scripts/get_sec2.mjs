import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)].map(m => m[0]);
fs.writeFileSync('sec2.html', sections[1]);
console.log('Saved sec2.html');
