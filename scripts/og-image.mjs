// Generates public/og-image.png (1200x630) for social link previews from the hero photo.
// Run: npm run og
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const photo = await sharp(`${root}src/assets/images/hero.png`).resize(1200, 630, { fit: 'cover' }).toBuffer();

const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#1e3a2a" stop-opacity="0.96"/>
      <stop offset="0.55" stop-color="#1e3a2a" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#1e3a2a" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(72 64)">
    <rect width="48" height="48" fill="#f3f2ed"/>
    <path d="M10 36 L24 13 L38 36" fill="none" stroke="#1e3a2a" stroke-width="3.5"/>
    <path d="M17 36 V26 M31 36 V26 M17 26 H31" fill="none" stroke="#1e3a2a" stroke-width="2.4"/>
    <rect x="22" y="6" width="4" height="4" fill="#c3d36b"/>
  </g>
  <text x="138" y="84" font-family="Menlo, monospace" font-size="16" letter-spacing="3" fill="#a9b8a6">SAN DIEGO</text>
  <text x="138" y="110" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#f3f2ed">Adventure Playground</text>
  <text x="72" y="300" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="66" letter-spacing="-2" fill="#f3f2ed">Kids don't just play here.</text>
  <text x="72" y="374" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="66" letter-spacing="-2" fill="#c3d36b">They build it.</text>
  <line x1="72" y1="470" x2="120" y2="470" stroke="#c3d36b" stroke-width="2"/>
  <text x="72" y="510" font-family="Menlo, monospace" font-size="18" letter-spacing="2" fill="#f3f2ed">REAL TOOLS. REAL ADVENTURES. LIMITLESS IMAGINATION.</text>
  <text x="72" y="560" font-family="Menlo, monospace" font-size="18" letter-spacing="2" fill="#a9b8a6">SDADVENTUREPLAYGROUND.ORG</text>
</svg>`;

await sharp(photo).composite([{ input: Buffer.from(overlay) }]).png().toFile(`${root}public/og-image.png`);
console.log('Wrote public/og-image.png');
