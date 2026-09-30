import fs from 'fs';

const data = JSON.parse(fs.readFileSync('sections_data.json', 'utf8'));

data.forEach(s => {
  console.log(`\n================ SECTION ${s.sectionIndex} ================`);
  const lines = [...s.fullHtml.matchAll(/<(?:p|h[1-6]|a)[^>]*>([\s\S]*?)<\/(?:p|h[1-6]|a)>/gi)]
    .map(m => m[0].replace(/<[^>]+>/g, '').trim())
    .filter(t => t.length > 0 && !t.includes('{'));
  console.log([...new Set(lines)].join('\n---\n'));
});
