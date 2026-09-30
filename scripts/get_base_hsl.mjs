import fs from 'fs';

const varsText = fs.readFileSync('extracted_vars.txt', 'utf8');
const lines = varsText.split('\n');

const baseHsl = lines.filter(l => 
  l.startsWith('white-hsl:') ||
  l.startsWith('black-hsl:') ||
  l.startsWith('accent-hsl:') ||
  l.startsWith('lightAccent-hsl:') ||
  l.startsWith('darkAccent-hsl:') ||
  l.startsWith('safeDarkAccent-hsl:') ||
  l.startsWith('heading-font-font-family:') ||
  l.startsWith('body-font-font-family:') ||
  l.startsWith('heading-1-size:') ||
  l.startsWith('heading-2-size:') ||
  l.startsWith('heading-3-size:') ||
  l.startsWith('heading-4-size:')
);

console.log('Base HSL & typography:', [...new Set(baseHsl)]);
