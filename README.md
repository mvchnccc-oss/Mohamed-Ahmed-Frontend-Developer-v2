# 🚀 Mohamed Ahmed — Portfolio (Upgraded)

Ultra-modern dark portfolio with 3D effects, particle canvas, tilt cards, glassmorphism navbar, and animated skill grid.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (fast dev server & bundler)
- **CSS-in-JS** inline styles (zero external CSS deps, copy-paste ready)
- Google Fonts: **Syne**, **Space Grotesk**, **JetBrains Mono**

## Setup

```bash
npm install
npm run dev
```

## Components

| File | Description |
|------|-------------|
| `Navbar.tsx` | Floating glassmorphism dock — highlights active section via IntersectionObserver |
| `Hero.tsx` | Particle canvas bg · typewriter text · orbit icon animation · social links |
| `About.tsx` | Bento grid layout · 3D tilt cards · timeline for education & experience |
| `Skills.tsx` | Filterable grid · animated progress bars · 3D tilt hover effect per card |
| `Projects.tsx` | Featured perspective-tilt card · regular 3D hover cards · glow borders |
| `Contact.tsx` | Glassmorphism form · shadcn/ui-style inputs · contact info cards |
| `Footer.tsx` | Clean dark footer · brand · nav links · socials |

## Images (place in `/public/`)

- `/public/Mohamed ahmed.png` — Your profile photo for the Hero
- `/public/ShopSphere Home.png` — ShopSphere project screenshot
- `/public/LandingPage.png` — SaaS Landing Page screenshot

## Notes

- The contact form simulates a 1.8s send delay. Wire it to **Formspree**, **EmailJS**, or a Next.js API route for real sends.
- All components are **zero-dependency** (no Framer Motion, Three.js, or external UI libs required) — effects are done with pure CSS animations and vanilla JS mouse events.
- To migrate to **Next.js App Router**: add `"use client"` at the top of each file (already present), move files to `app/components/`, and replace `index.tsx` with `app/page.tsx`.
