import fs from 'fs';

async function run() {
  try {
    const res = await fetch('https://www.conejovalleycounseling.com/home');
    const html = await res.text();
    fs.writeFileSync('scraped_home.html', html);
    
    // Find all images
    const imgMatches = [...html.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi)];
    const images = imgMatches.map(m => {
      const srcMatch = m[0].match(/(?:src|data-src)=["']([^"']+)["']/i);
      const altMatch = m[0].match(/alt=["']([^"']*)["']/i);
      return {
        tag: m[0],
        src: srcMatch ? srcMatch[1] : null,
        alt: altMatch ? altMatch[1] : ''
      };
    });
    
    fs.writeFileSync('extracted_images.json', JSON.stringify(images, null, 2));
    console.log(`Found ${images.length} images. Saved to extracted_images.json and scraped_home.html`);
  } catch (err) {
    console.error('Error fetching:', err);
  }
}

run();
