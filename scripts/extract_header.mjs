import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');

// Find header tag
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  fs.writeFileSync('header_extracted.html', headerMatch[0]);
  console.log('Saved header_extracted.html', headerMatch[0].length);
} else {
  console.log('No <header> tag found');
}
