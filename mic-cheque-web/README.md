# Mic Cheque Podcast — Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure so far

- `app/layout.tsx` — loads the two brand fonts (Anton for display, Space Grotesk for body) and sets the base background/text color
- `app/page.tsx` — assembles the home page: Navbar + Hero + TuneIn
- `components/Navbar.tsx` — 5-section nav (Episodes, Hosts, Hangouts, Shop) with mobile menu
- `components/Hero.tsx` — marigold hero, sticker logo lockup, host portrait "tune-in" motion moment (Framer Motion)
- `components/RetroTV.tsx` — a single retro TV cabinet used to display one episode
- `components/TuneIn.tsx` — the 3 latest/hottest episodes as retro TVs, on the home page

## Design tokens (tailwind.config.ts)

| Token      | Hex       | Use                                  |
|------------|-----------|---------------------------------------|
| `marigold` | `#F2C230` | Primary field color (not just accent) |
| `ink`      | `#1A1A1A` | Type, TV cabinets, structural lines   |
| `paper`    | `#F5F3EE` | Sticker/card backgrounds              |
| `signal`   | `#C41E1E` | The one loud accent — live dots only  |
| `static`   | `#8A8A8A` | Muted text, dividers                  |
| `crt`      | `#0D0D0D` | Video/player backgrounds              |

## Design rules to keep in mind as we build more pages

- No rounded corners on UI chrome (buttons, cards, nav, sections). The only
  rounded shapes are real-world objects — TV cabinets, host portrait circles —
  and those set their own radius directly, never `rounded-*` utilities.
- Gold is a field color. Most sections should sit directly on marigold or
  paper, not a neutral grey/white default background.
- The red dot is functional (live/new indicators), never purely decorative.
- One motion moment per page max — right now that's the hero's host portraits
  tuning in from static. Don't add fade-up-on-scroll to everything.
- Swap the 🕶️ emoji placeholders in `Hero.tsx` for real halftone host photos
  once assets are ready.

## Still to build

Hosts, Hangouts, and Shop sections/pages — see the sitemap discussion in chat.
Fantasy League + streaming platform links (Spotify/Apple/YouTube) are meant
to live in a footer component (not yet built) rather than get their own page.
