// Render index.html to entry.png at exactly 1024x1024.
// Run from this directory:  node render.mjs
// Uses the puppeteer install in ../shot-test (shared with the token-radar build).
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const puppeteer = require('../../shot-test/node_modules/puppeteer');

const here = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(here, 'index.html');
const outPath = path.join(here, 'entry.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: outPath });
await browser.close();

const fs = await import('node:fs');
const st = fs.statSync(outPath);
console.log('wrote', outPath, st.size, 'bytes');
