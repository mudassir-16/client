import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)].map(m => m[0]);

const data = sections.map((sec, idx) => {
  // Extract all text blocks, headings, buttons, and links
  const texts = [...sec.matchAll(/<(?:p|h[1-6]|span|a|button)[^>]*>([\s\S]*?)<\/(?:p|h[1-6]|span|a|button)>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(t => t.length > 0 && !t.includes('{') && !t.includes('}'));
  
  return {
    sectionIndex: idx + 1,
    rawTextPreview: texts.slice(0, 15),
    fullHtml: sec
  };
});

fs.writeFileSync('sections_data.json', JSON.stringify(data, null, 2));
console.log('Saved sections_data.json');
