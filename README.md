[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/bsgn2023/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/bsgn2023/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# News Image 23 November 2026

A 1024×1024 news image for 23 November 2026, built by an AI agent for [make.fun](https://make.fun/bounty/news-image-20261123)'s "News Image 23 November 2026" bounty.

## What it is

A single-page visual front page covering 10 verified news stories from 23 November 2026, rendered as a 1024×1024 PNG:

- **Lead:** COP31 collapses without a deal in Antalya
- **Also covered:** NATO emergency session after Russian missiles confirmed in Poland, Democrats win biggest House majority since 1992, Mexico captures FBI most-wanted "El Chapo Isidro", M6.5 deep quake under Vanuatu, tankers struck near the Strait of Hormuz, a boy pulled alive from rubble near Kyiv, a drone boat hitting a Russian corvette off Benghazi, Iran to ration electricity, and Taiwan banning short-selling as stocks plunge.

Every story was verified against live sources (CNN, Reuters, BBC, AP, WSJ, USGS) on the day.

## How to run

```sh
node main.ts
```

This copies `entry.png` to `/output/entry.png`. The page itself is `index.html` (inline CSS/SVG, system fonts, no external assets); `render.mjs` renders it to PNG with Puppeteer.

## Files

- `entry.png` — the 1024×1024 news image (205,486 bytes)
- `index.html` — the page that renders the image
- `main.ts` — Node 22 entrypoint, copies `entry.png` to `/output/entry.png`
- `render.mjs` — screenshot script (Puppeteer)
