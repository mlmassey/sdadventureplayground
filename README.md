# San Diego Adventure Playground

**Real Tools. Real Adventures. Limitless Imagination.**

The one-page website for **San Diego Adventure Playground**, a proposed community initiative to bring an authentic, staffed Adventure Playground to San Diego County. The site pitches the idea to developers, landowners, city officials, sponsors, and families, and invites them to partner with us.

Live site: <https://sdadventureplayground.org>

## Tech stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | [Astro 7](https://astro.build) (static output) | Ships plain HTML with zero JS by default, giving very fast loads and strong SEO. |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` | Design tokens live in one `@theme` block; responsive utilities. |
| Fonts | Archivo (display), Inter (body), JetBrains Mono (labels), self-hosted via `@fontsource-variable` | No third-party font requests, so it's faster and more private. |
| Images | `astro:assets` | Photos are converted to AVIF/WebP and resized responsively at build time. |
| Icons | [Lucide](https://lucide.dev) via `@lucide/astro` | Consistent, ISC-licensed SVG icons, inlined at build time. |
| Hosting | GitHub Pages via GitHub Actions | Free, static, custom-domain friendly. |
| Contact | `mailto:` links | No backend needed at this stage. |

## Getting started

Requires **Node 22+** (`nvm use` reads `.nvmrc`).

```sh
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # type-check (astro check) + static build to dist/
npm run preview   # serve the built site locally
npm run og        # regenerate public/og-image.png (social share image)
```

## Project structure

```
docs/genesis.md            Original source copy for the site
public/                    Static files served as-is
  llms.txt                 LLM-readable summary of the project (llmstxt.org)
  og-image.png             Social share image (generated from the hero photo by scripts/og-image.mjs)
  CNAME, robots.txt, favicon.svg
scripts/og-image.mjs       Generates the Open Graph image
src/
  assets/images/           Site photos (see Images below)
  content/site.ts          ← ALL page copy, links, and the contact email live here
  styles/global.css        Tailwind import + brand design tokens (@theme)
  layouts/BaseLayout.astro <head>, SEO/Open Graph meta, JSON-LD, skip link
  pages/index.astro        Composes the page from section components
  components/              One component per page section (Hero, WhatIs, …)
    ui/                    Shared primitives: Button, Section, Icon
.github/workflows/deploy.yml  Build + deploy to GitHub Pages on push to main
```

## Editing content

All words on the page come from [`src/content/site.ts`](src/content/site.ts). To change a headline, a list item, or the contact email, edit that file. Components only handle layout. If you change the project's facts, update [`public/llms.txt`](public/llms.txt) too.

## Design system

**Direction: "nature, tamed by hand."** Forest greens and industrial greys, hard edges, and spec-sheet details. The aim is to read like a landscape-architecture or civic proposal, because the audience is developers and city officials. The photography carries the warmth and play.

- **Palette:** neutrals `bone` `#f3f2ed`, `concrete` `#e3e3dd`, `steel` `#5d635f`, `charcoal` `#1c201e`; greens `forest` `#1e3a2a`, `moss` `#3f6a4c`, `sage` `#a9b8a6`; a single accent, `lichen` `#c3d36b`, used sparingly on dark backgrounds. Tokens live in `src/styles/global.css`.
- **Type:** Archivo (slightly expanded) for headlines, Inter for body, and JetBrains Mono caps for labels, indices, and captions (`.label`).
- **Structure:** square corners, 1px hairline rules, bordered grids, numbered sections (`01`–`05`), and a 12-column grid.
- **Motion:** a subtle scroll reveal only, disabled under `prefers-reduced-motion`.

## Images

Photo slots are defined in `images` in [`src/content/site.ts`](src/content/site.ts). Each slot has an aspect ratio, alt text, a **brief** (also usable as a generation prompt), and an optional `file`.

1. Put the photo in `src/assets/images/`.
2. Either set `file: 'my-photo.jpg'` on the slot or name the file after the slot id (e.g. `hands.jpg`).
3. Update the slot's `alt` to describe the actual photo.

Any slot without a file renders a labeled placeholder showing its brief. See [`src/assets/images/README.md`](src/assets/images/README.md) for the slot list. Upload images at least 2400px on the long edge.

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and deploys.
4. **Custom domain:** `public/CNAME` contains `sdadventureplayground.org`. At your DNS provider, add `A` records for the apex pointing to GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` for `www` pointing to `<user>.github.io`. Then enable **Enforce HTTPS** in Settings → Pages.

## Roadmap ideas

- Fill the remaining photo slots (`hands`, `teamwork`, `cta`).
- Partner inquiry form (e.g. Formspree or a Cloudflare Worker) if mailto proves limiting.
- Downloadable one-page PDF pitch for developers and city officials.
- Privacy-friendly analytics (e.g. Plausible).

---

*San Diego Adventure Playground: a proposed community initiative.*
