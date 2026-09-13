import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import sharp from "sharp";

const ROOT = resolve(import.meta.dirname, "..");
const SOURCE_IMAGE = resolve(
  ROOT,
  "public/images/home-energy-engineering-hero.webp",
);
const OUTPUT_DIR = resolve(ROOT, "public/og");
const OUTPUT_PATH = resolve(OUTPUT_DIR, "default.png");

const WIDTH = 1200;
const HEIGHT = 630;

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function buildOverlaySvg() {
  const title = escapeXml("СИСТЕМІКА");
  const subtitle = escapeXml("Інженерні та енергетичні рішення");

  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b1a19" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#0b1a19" stop-opacity="0.82" />
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#overlay)" />
      <text x="72" y="440" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff">${title}</text>
      <text x="72" y="500" font-family="Arial, sans-serif" font-size="34" font-weight="500" fill="#c7ece6">${subtitle}</text>
      <rect x="72" y="530" width="96" height="6" fill="#0f766e" />
    </svg>
  `);
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const background = await sharp(SOURCE_IMAGE)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
    .toBuffer();

  const image = await sharp(background)
    .composite([{ input: buildOverlaySvg(), top: 0, left: 0 }])
    .png()
    .toBuffer();

  await writeFile(OUTPUT_PATH, image);
  console.log(`Wrote ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
