import fs from 'fs';

const varsText = fs.readFileSync('extracted_vars.txt', 'utf8');
const lines = varsText.split('\n');

const navVars = lines.filter(l => l.startsWith('site-navigation-font-'));
console.log('Site navigation font vars:', navVars);
