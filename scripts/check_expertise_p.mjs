import fs from 'fs';

const html = fs.readFileSync('sec4_5.html', 'utf8');
const pMatches = [...html.matchAll(/<div class="sqs-html-content"[^>]*>([\s\S]*?)<\/div>/gi)].map(m => m[1].trim());
console.log('HTML contents in sec 4 & 5:', pMatches.slice(0, 15));
