# Site images

Slots are defined in `images` in `src/content/site.ts`. A slot uses its `file` if set,
otherwise `<slot-id>.(jpg|jpeg|png|webp|avif)`. Slots with no file render a labeled placeholder.

| Slot | Aspect | Section | Current file |
| --- | --- | --- | --- |
| `hero` | 16:9 | Hero | `hero.png` |
| `hands` | 4:5 | 01 The idea | (placeholder) |
| `teamwork` | 3:2 (21:9 on desktop) | 02 Why | (placeholder) |
| `structures` | 4:3 | 03 Precedent | `kids-playground.jpg` |
| `site` | 21:9 (4:3 on mobile) | 04 Vision | `huge-playground.png` |
| `workshop` | 4:3 | 05 Partner | `playground2.jpg` |
| `cta` | full-bleed background | Final call to action | (placeholder) |

Images are cropped to the slot (`object-cover`), and Astro generates responsive AVIF/WebP
at build time. Aim for at least 2400px on the long edge.
