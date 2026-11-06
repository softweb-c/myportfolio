import sharp from "sharp";
import { join } from "node:path";
import { mkdir } from "node:fs/promises";

const TARGETS = [
  // Headshot: 36x36 CSS px → 108x108 at 3× DPR. Massive size win.
  { dir: "public/images", name: "headshot.png", width: 108, height: 108 },

  // Project screenshots: rendered inside an ~800px-wide laptop screen at 2× DPR.
  { dir: "public/projects", name: "promix.png", width: 1600 },
  { dir: "public/projects", name: "olarms.png", width: 1600 },
  { dir: "public/projects", name: "smartgate.png", width: 1600 },

  // Hero: rendered at 600x450 CSS px → 1200x900 at 2× DPR.
  { dir: "src/assets", name: "hero.png", width: 1200, height: 900 },
];

for (const t of TARGETS) {
  const input = join(t.dir, t.name);
  const output = input.replace(/\.png$/i, ".webp");
  await mkdir(t.dir, { recursive: true });
  await sharp(input)
    .resize({
      width: t.width,
      height: t.height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 85 })
    .toFile(output);
  console.log(`✓ ${input} → ${output}`);
}