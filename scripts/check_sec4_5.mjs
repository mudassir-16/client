import fs from 'fs';

const html = fs.readFileSync('sec4_5.html', 'utf8');

const themeMatches = [...html.matchAll(/data-section-theme=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Section themes:', themeMatches);

const bgImages = [...html.matchAll(/class=["'][^"']*section-background[^"']*["'][\s\S]*?<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Bg images:', bgImages);

// Check expertise items markup
const pTags = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('All p tags in sec 4 & 5:', pTags);
