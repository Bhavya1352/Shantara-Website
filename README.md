# Shantar&#257; &mdash; Homepage

A homepage for Shantara, a premium naturopathy retreat in Kozhikode, Kerala. Built as a
standalone React + Vite + Tailwind CSS front end, using the client's own brand palette,
typography direction and property photography as the primary source of truth.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first theme, see `src/index.css`)
- Framer Motion for entrance, scroll-linked and hover animations
- Lenis for smooth scrolling
- React Icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/      Navbar, Button, SectionLabel, Reveal, ImageReveal, CountUp, Pattern
  sections/         Hero, Introduction, Legacy, Retreat, HealingJourney, HealingGoals,
                     Programs, Experience, FinalCTA, Footer
  data/content.js   All copy and structured content, kept separate from UI
  hooks/useLenis.js Smooth-scroll setup, respects prefers-reduced-motion
public/img/         Property photography, extracted directly from the client's brochure
```

## Design notes

**Palette** was sampled from the client's design-system reference (cream `#F5F1E6`,
deep olive pine `#3C4A1E`, warm gold accent, merino neutral) rather than invented.

**Typography** pairs Fraunces (an editorial serif with a light italic, used for display type)
with Instrument Sans (body copy) &mdash; loaded from Google Fonts since the client's own
Diodrum Cyrillic typeface isn't available in this environment. Swap the `@import` and
`--font-display` / `--font-body` tokens in `src/index.css` to substitute the licensed
brand typeface once available.

**Photography** is the client's own: every image in `public/img/` was extracted directly
from the supplied brochure PDF (property interiors, therapy rooms, dining, architecture,
guest rooms) rather than generic stock. No AI-generated or stock imagery was used.

**Motion** is deliberately restrained: a single orchestrated hero entrance, one signature
scroll-pinned moment in the Healing Journey section, and hover/click interactions in the
Healing Goals and Programs sections. Nothing else animates on scroll beyond a quiet fade-up.

## Scope

This deliverable is the homepage only, per the brief. No other routes are implemented;
footer and nav links point to in-page anchors or are placeholders for future pages
(Conditions, Programs, Experience, About, Book Consultation) as laid out in the sitemap
the client provided.
