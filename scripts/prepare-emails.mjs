/**
 * Prepares email design exports for the site.
 *
 *   node scripts/prepare-emails.mjs
 *
 * For every PNG/JPG dropped in public/emails/ it will:
 *   1. convert to lossless WebP  (identical visible pixels, ~37% smaller)
 *   2. verify pixel-for-pixel that nothing visible changed, and only delete
 *      the original once that passes
 *   4. build a 10px blur preview so cards are never blank while loading
 *   5. print ready-made content/site.ts entries
 *
 * Export originals at >=600px wide with NO height cap.
 */
import sharpMod from "sharp";
const sharp = sharpMod.default ?? sharpMod;
import { readdirSync, readFileSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public/emails");

const raw = (p) => sharp(readFileSync(p)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

/** Compares only pixels a viewer can see; fully transparent RGB is arbitrary. */
async function visibleDiff(a, b) {
  const [x, y] = await Promise.all([raw(a), raw(b)]);
  if (x.data.length !== y.data.length) return Infinity;
  let n = 0;
  for (let p = 0; p < x.data.length / 4; p++) {
    const o = p * 4;
    if (x.data[o + 3] === 0 && y.data[o + 3] === 0) continue;
    if (x.data[o] !== y.data[o] || x.data[o+1] !== y.data[o+1] ||
        x.data[o+2] !== y.data[o+2] || x.data[o+3] !== y.data[o+3]) n++;
  }
  return n;
}

const entries = [];
for (const f of readdirSync(DIR).sort()) {
  const src = path.join(DIR, f);
  const ext = path.extname(f).toLowerCase();
  let webp = src;

  if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    webp = src.replace(/\.(png|jpe?g)$/i, ".webp");
    await sharp(readFileSync(src)).webp({ lossless: true, effort: 6 }).toFile(webp);
    const diff = await visibleDiff(src, webp);
    if (diff !== 0) {
      console.error(`  ${f}: ${diff} visible pixels changed — original kept, check this one`);
      continue;
    }
    console.log(`  ${f} -> webp  (${(100 - statSync(webp).size / statSync(src).size * 100).toFixed(0)}% smaller, 0 pixels changed)`);
    unlinkSync(src);
  } else if (ext !== ".webp" || f.includes("-sm")) {
    continue;
  }

  const slug = path.basename(webp, ".webp");
  const blur = (await sharp(readFileSync(webp)).resize({ width: 10 }).webp({ quality: 40 }).toBuffer())
    .toString("base64");
  const { width, height } = await sharp(readFileSync(webp)).metadata();
  entries.push(`    { src: "/emails/${slug}.webp", w: ${width}, h: ${height}, brand: "TODO", alt: "TODO", blur: "data:image/webp;base64,${blur}" },`);
}

console.log(`\nPaste into content/site.ts -> emailDesigns.items (fill in brand and alt):\n`);
console.log(entries.join("\n"));
