// news-image-20261123 entry (Node 22, standard library only).
// The infographic is rendered from index.html by render.mjs and stored here
// as entry.png; this program copies it to the grader's output directory.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels.
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
copyFileSync(source, join(outDir, 'entry.png'));
