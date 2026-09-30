import fs from 'fs';

const varsText = fs.readFileSync('extracted_vars.txt', 'utf8');
const lines = varsText.split('\n');

const typographyProps = lines.filter(l => 
  l.includes('heading-1-') ||
  l.includes('heading-2-') ||
  l.includes('body-font-') ||
  l.includes('button-font-')
);

console.log('Typography specifics:', [...new Set(typographyProps)]);
