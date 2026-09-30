import fs from 'fs';

const html = fs.readFileSync('sec4_5.html', 'utf8');
const expertiseBlock = html.match(/<div class="sqs-block-content"[\s\S]*?Our areas of expertise[\s\S]*?<\/div>\s*<\/div>/i);
if (expertiseBlock) {
  console.log(expertiseBlock[0]);
} else {
  // search for "Our areas"
  const idx = html.indexOf('Our areas');
  console.log(html.substring(idx - 100, idx + 800));
}
