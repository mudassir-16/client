import fs from 'fs';
import path from 'path';

const images = [
  { name: 'logo.png', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w' },
  { name: 'hero_family.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg?format=1000w' },
  { name: 'hero_child.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg?format=1000w' },
  { name: 'hope_beach.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg?format=1000w' },
  { name: 'who_adults.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg?format=1000w' },
  { name: 'who_couples.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg?format=1000w' },
  { name: 'who_children.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg?format=1000w' },
  { name: 'texture_bg.png', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png?format=1500w' },
  { name: 'how_we_work_dance.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg?format=1000w' },
  { name: 'specialties_family.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg?format=1500w' },
  { name: 'appointment_seashells.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg?format=1500w' },
  { name: 'contact_child_shells.jpg', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg?format=1500w' },
  { name: 'favicon.ico', url: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/9f1bb212-4047-4ddb-a144-79c1f9704dfe/favicon.ico?format=100w' }
];

const destDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function downloadAll() {
  for (const img of images) {
    try {
      const res = await fetch(img.url);
      if (!res.ok) {
        console.error(`Failed ${img.name}: status ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(destDir, img.name), buffer);
      console.log(`Saved ${img.name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error saving ${img.name}:`, err.message);
    }
  }
}

downloadAll();
