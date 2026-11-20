# AGENT.md

Guidance for AI coding agents (Claude Code, Codex, Cursor, etc.) working in this repo.

## What this is

A **single-page static marketing site** for San Diego Adventure Playground, a proposed kids' adventure playground. The audience is **developers, landowners, city officials, and sponsors**, so the site must feel **credible, well funded, and architectural**. The direction is *nature, tamed by hand*: forest greens and industrial greys, hard edges, and hairline rules. It should read like a landscape-architecture or civic-infrastructure proposal, **never like a kids' brand**. No bright multi-color palettes, rounded bubbly shapes, cartoon illustrations, stickers, or wobbly rotations.

## Stack

- **Astro 7**, static output, TypeScript strict (`astro/tsconfigs/strict`)
- **Tailwind CSS v4** through `@tailwindcss/vite`. There is no `tailwind.config.js`; tokens live in `@theme` in `src/styles/global.css`.
- **@lucide/astro** for icons (stroke 1.5); **@fontsource-variable** for Archivo (display, `font-stretch: 112%`), Inter (body), and JetBrains Mono (spec labels)
- **astro:assets** for image optimization (AVIF/WebP, responsive `srcset`)
- Deployed to **GitHub Pages** by `.github/workflows/deploy.yml`

## Commands

```sh
npm run dev       # dev server, http://localhost:4321
npm run build     # astro check (types) + astro build. Must pass with 0 errors/warnings.
npm run preview   # serve dist/
npm run og        # regenerate public/og-image.png
```

## Where things live

- **Copy and links:** `src/content/site.ts` is the single source of truth. Never hard-code copy, the email, or URLs in components. Use `mailto(subject)` from there for contact links.
- **Original source copy:** `docs/genesis.md`. Keep `site.ts` faithful to it unless the user asks for edits.
- **Sections:** `src/components/*.astro`, composed in `src/pages/index.astro`. Wrap new sections in `ui/Section.astro` (handles id, eyebrow, heading, spacing, and tone).
- **Primitives:** `ui/Button.astro` (variants: primary, outline, light, outline-light), `ui/Section.astro`, `ui/Icon.astro` (semantic names map to Lucide; add new names to `IconName` in `site.ts`), `ui/Photo.astro` (image slots).
- **Images:** slots are defined in `images` in `site.ts` (aspect, alt, brief, optional `file`). Files live in `src/assets/images/`. `Photo` renders the file if it exists, otherwise a labeled placeholder showing the brief. Always write accurate `alt` text when a file is assigned.
- **LLM summary:** `public/llms.txt`. Update it whenever project facts change.

## Rules

1. **Zero JS by default.** Don't add React, Vue, or any client framework or hydration without a clear need. Prefer CSS and native HTML (`<details>`, scroll-driven animations). The only script is the tiny inline menu-closer in `SiteHeader.astro`.
2. **Use design tokens only.** Use Tailwind utilities from the theme: neutrals `bone`, `concrete`, `line`, `steel`, `charcoal`, `graphite`; greens `forest`, `moss`, `sage`; one accent, `lichen`. Use `lichen` sparingly and only on dark (forest/charcoal) backgrounds. Don't introduce ad-hoc hex colors in components; add a token instead.
3. **Hard edges.** No `rounded-*`, no drop shadows, no rotations. Structure comes from 1px hairline rules (`border-line`, `border-charcoal`), bordered grids, and the 12-column `max-w-7xl` grid.
4. **Spec-sheet typography.** Headlines in Archivo (bold/extrabold, tight tracking). Small uppercase mono labels use the `.label` class for eyebrows, indices (`01`, `02`), and captions. Sections are numbered through `Section`'s `index` prop.
5. **Photography carries the warmth.** Use real or generated documentary-style photos (natural light, muted greens and greys). No illustrations or clip art.
6. **Mobile-first and responsive.** Design at 375px first, then `sm`, `md`, `lg`. There must be no horizontal scroll at any width.
7. **Accessibility (WCAG AA):** semantic landmarks, one `h1`, ordered headings, `aria-hidden` on decorative SVGs and icons, visible focus (global `:focus-visible`), and meaningful `alt` text on every photo.
8. **Motion is minimal.** Only the subtle `.reveal` fade/slide; respect `prefers-reduced-motion`.
9. **Gotcha:** passing `hidden` via `class` to `Button` won't work (its base `inline-flex` wins). Wrap the button in an element that toggles visibility.

## Verification checklist

- `npm run build` passes with no type errors.
- Check `npm run preview` at **375px** and **1440px**: no horizontal scroll, the nav works (mobile `<details>` menu), and all `mailto:` and external links are correct.
- `/llms.txt`, `/sitemap-index.xml`, and `/robots.txt` are served.
