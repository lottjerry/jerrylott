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

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <pattern id="dot-grid" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.25" fill="#ffffff" fill-opacity="0.28" />
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#000000" />
  <text x="64" y="72" fill="#ffffff" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="16" letter-spacing="1">[ 00 ]    /portfolio</text>
  <text x="1136" y="72" text-anchor="end" fill="#ffffff" fill-opacity="0.55" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="16" letter-spacing="1">JERRY LOTT // D4 STUDIO</text>
  <line x1="64" y1="96" x2="1136" y2="96" stroke="#ffffff" stroke-width="1.5" />
  <rect x="780" y="148" width="356" height="276" fill="url(#dot-grid)" />
  <text x="64" y="235" fill="#ffffff" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-weight="900" font-size="88" letter-spacing="-2.5">JERRY LOTT.</text>
  <text x="64" y="322" fill="#ffffff" fill-opacity="0.5" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" letter-spacing="-1.5">DESIGN. DEVELOP.</text>
  <text x="64" y="386" fill="#ffffff" fill-opacity="0.5" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" letter-spacing="-1.5">DEPLOY. DEFEND.</text>
  <line x1="64" y1="528" x2="1136" y2="528" stroke="#ffffff" stroke-opacity="0.3" stroke-width="1" />
  <text x="64" y="568" fill="#ffffff" fill-opacity="0.8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="15" letter-spacing="1">FULL-STACK DEVELOPER  •  UI/UX DESIGNER  •  SECURITY RESEARCHER</text>
  <text x="1136" y="568" text-anchor="end" fill="#ffffff" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="15" letter-spacing="1">JERRYLOTT.COM</text>
</svg>`;

await writeFile("public/favicon.svg", faviconSvg, "utf8");
await sharp(Buffer.from(appleTouchSvg))
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");
await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile("public/og-image.png");

console.log(
  "Generated public/favicon.svg, public/apple-touch-icon.png, and public/og-image.png",
);
