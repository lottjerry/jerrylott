// scripts/generate-meta-assets.mjs
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#000000" />
  <rect x="2" y="2" width="60" height="60" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1.5" />
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" letter-spacing="-1">JL</text>
</svg>`;

const appleTouchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" fill="#000000" />
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-weight="900" font-size="76" letter-spacing="-2">JL</text>
</svg>`;

await writeFile("public/favicon.svg", faviconSvg, "utf8");
await sharp(Buffer.from(faviconSvg))
  .resize(32, 32)
  .png()
  .toFile("public/favicon-32x32.png");
await sharp(Buffer.from(appleTouchSvg))
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");

console.log(
  "Generated public/favicon.svg, public/favicon-32x32.png, and public/apple-touch-icon.png",
);
