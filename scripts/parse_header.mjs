import fs from 'fs';

const html = fs.readFileSync('header_extracted.html', 'utf8');

// Find navigation links and folder titles
const navItems = [...html.matchAll(/<div class="header-nav-item[\s\S]*?<\/div>/gi)].map(m => m[0]);
console.log('Nav items count:', navItems.length);

const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
  href: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim()
}));
console.log('Header links:', links);
