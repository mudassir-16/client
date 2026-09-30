import fs from 'fs';

const varsText = fs.readFileSync('extracted_vars.txt', 'utf8');
const lines = varsText.split('\n');

const relevant = lines.filter(l => 
  l.includes('accent') || 
  l.includes('heading-font') || 
  l.includes('body-font') || 
  l.includes('primaryButton') ||
  l.includes('siteBackgroundColor') ||
  l.includes('headingColor') ||
  l.includes('textColor')
);

console.log('Relevant tokens:', [...new Set(relevant)].slice(0, 40));
