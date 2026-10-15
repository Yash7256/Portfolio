# Soren Weil — Bento Portfolio

Single-page dark "bento grid" portfolio. Built with **Vite + React + TypeScript + Tailwind CSS v4 + Motion**, with **lucide-react** icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Editing content

All editable content lives in one place: [`src/data/content.ts`](./src/data/content.ts).

```ts
export const content = {
  name: 'Soren Weil',
  role: 'AI Design Engineer',
  city: 'Bhopal',
  timeZone: 'Asia/Kolkata', // any IANA zone, drives the live clock
  photo: '/portrait.jpg',   // path inside /public
  links: {
    about: '/about',
    portfolio: '/portfolio',
    contact: '/contact',
    resume: '/resume.pdf',
  },
}
```

### Change the name / role / city
Edit `name`, `role`, and `city`. The hero heading, top bar, and clock all read from here.

### Change the photo
Drop your image into the `public/` folder and point `photo` at it, e.g. `public/me.jpg` → `photo: '/me.jpg'`.
The photo card renders it grayscale, `object-cover`, `object-position: top` (a portrait, ideally 4:5).

### Change the links
Update the `links` object. Each bento card links to its value (About, Portfolio, Contact, Resume).

## Structure

```
src/
  App.tsx                    # layout: top bar, hero, 12-col bento grid
  data/content.ts            # all editable content
  index.css                  # Tailwind theme, base styles, grain + keyframes
  components/
    TopBar.tsx               # name · role · live clock · pulse dot
    LiveClock.tsx            # Intl.DateTimeFormat clock (per-second tick)
    Hero.tsx                 # oversized name + blurred mirror reflection
    BentoCard.tsx            # base card (link or panel) with label + arrow
    ToolsMarquee.tsx         # infinite icon-tile marquee
    PhotoCard.tsx            # B&W portrait card
public/
  portrait.jpg               # placeholder portrait — replace this
```

## Layout notes

- **Desktop (≥768px):** full viewport, no page scroll (`100dvh`), 12-column × 2-row grid, 16px gaps, 20px outer padding. The giant hero name sits behind the cards; its bottom edge is clipped by them, with a blurred flipped reflection layered on top.
- **Mobile (<768px):** single column stack, hero name ~56px, cards `min-h: 180px`, photo card 4:5, page scrolls.
- `prefers-reduced-motion` disables the intro animation, marquee, pulse, and hover transitions.
