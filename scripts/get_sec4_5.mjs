import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)].map(m => m[0]);
fs.writeFileSync('sec4_5.html', sections[3] + '\n\n' + sections[4]);
console.log('Saved sec4_5.html');
