import fs from 'fs';

const css = fs.readFileSync('site_main.css', 'utf8');
const navStyles = css.match(/\.header-nav-item[^}]+\}/g) || [];
console.log('Nav item styles:', navStyles.slice(0, 10));

const headerNav = css.match(/--nav-link-font[^;]+/g) || [];
console.log('Nav font vars:', headerNav);

const headerClasses = [...css.matchAll(/\.header-title-logo\s*img\s*\{([^}]+)\}/g)].map(m => m[1]);
console.log('Logo img styles:', headerClasses);
