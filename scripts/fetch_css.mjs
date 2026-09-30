import fs from 'fs';

async function fetchCss() {
  const url = 'https://static1.squarespace.com/static/versioned-site-css/670423e106da6c036366fd10/135/5c5a519771c10ba3470d8101/670423e106da6c036366fd18/1832/site.css?nocustom=true';
  const res = await fetch(url);
  const css = await res.text();
  fs.writeFileSync('site_main.css', css);
  console.log('Saved site_main.css', css.length);

  // Extract color definitions and variables
  const colorVars = [...css.matchAll(/--([a-zA-Z0-9_-]+):\s*([^;]+);/g)].map(m => `${m[1]}: ${m[2]}`);
  fs.writeFileSync('extracted_vars.txt', colorVars.join('\n'));
  console.log('Extracted', colorVars.length, 'CSS variables to extracted_vars.txt');
}

fetchCss();
