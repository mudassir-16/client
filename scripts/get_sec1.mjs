import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');
const sec1 = html.match(/<section[\s\S]*?<\/section>/i);
if (sec1) {
  fs.writeFileSync('sec1.html', sec1[0]);
  console.log('Saved sec1.html');
}
