// news-image-20261123 entry, revised round (Node 22, standard library only).
// The front page is rendered from index.html by render.mjs into entry.png;
// this program copies that image to the grader's output directory.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels.
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = new URL('./entry.png', import.meta.url);
copyFileSync(image, join(outputDir, 'entry.png'));
