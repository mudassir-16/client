import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');

// Find all section elements
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)].map(m => m[0]);
console.log('Total sections found:', sections.length);

sections.forEach((sec, idx) => {
  const headings = [...sec.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => m[2].replace(/<[^>]+>/g, '').trim());
  const paragraphs = [...sec.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  const imgs = [...sec.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi)].map(m => {
    const src = m[0].match(/(?:src|data-src)=["']([^"']+)["']/i);
    const alt = m[0].match(/alt=["']([^"']*)["']/i);
    return { src: src ? src[1] : '', alt: alt ? alt[1] : '' };
  });

  console.log(`\n--- Section ${idx + 1} ---`);
  console.log('Headings:', headings);
  console.log('Paragraphs count:', paragraphs.length);
  if (paragraphs.length > 0) console.log('First p:', paragraphs[0].substring(0, 100));
  console.log('Images count:', imgs.length);
});
