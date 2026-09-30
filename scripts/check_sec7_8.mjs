import fs from 'fs';

const html = fs.readFileSync('sec7_8.html', 'utf8');

const themes = [...html.matchAll(/data-section-theme=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Themes in sec 7 & 8:', themes);

const images = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Images in sec 7 & 8:', images);

const h4s = [...html.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H4s in sec 7 & 8:', h4s);
