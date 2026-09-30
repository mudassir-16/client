import fs from 'fs';

const html = fs.readFileSync('scraped_home.html', 'utf8');

// Find all css links
const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('CSS links:', cssLinks);

// Let's also look for inline styles or style tags
const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Found style tags:', styles.length);

async function checkStyles() {
  for (const url of cssLinks) {
    if (url.includes('site.css') || url.includes('definitions') || url.includes('styles-compressed')) {
      try {
        const fullUrl = url.startsWith('//') ? 'https:' + url : url;
        const res = await fetch(fullUrl);
        const css = await res.text();
        fs.writeFileSync('site.css', css);
        console.log(`Saved CSS from ${url} (${css.length} bytes)`);
        
        // Find custom properties
        const vars = [...css.matchAll(/--[a-zA-Z0-9_-]+:\s*[^;]+/g)].map(m => m[0]);
        console.log('Some CSS variables:', vars.slice(0, 30));
        break;
      } catch (e) {
        console.error('Error fetching css:', e.message);
      }
    }
  }
}

checkStyles();
