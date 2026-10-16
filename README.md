# Bohdan Petchenko — Portfolio

Personal portfolio of a Full Stack Engineer (React, TypeScript, Node.js, NestJS).

**Live:** [career-portfolio-blue.vercel.app](https://career-portfolio-blue.vercel.app)

## What's inside

A single page with seven sections:

- **Hero.** A full-screen video that plays once and holds its last frame. The poster image is the LCP element. When the user prefers reduced motion, the page shows the end frame. If autoplay is blocked (for example in iOS Low Power Mode), the video starts on the first tap.
- **About.** An intro, a draggable ID badge and three disciplines: Frontend, Backend and AI-DLC.
- **How I work.** Working principles, an animated orbit of the stack, and the key numbers.
- **Stack.** Tools grouped by layer, from interface to AI workflow.
- **Selected work.** Eight case studies, each written as problem, action and result, with CSS-only illustrations. The product is under NDA, so there are no screenshots.
- **Background.** Experience, education, languages and a downloadable CV.
- **Contact.** Copy-to-clipboard email and links.

Accessibility and performance:

- Skip link, a native `<dialog>` for the mobile menu, and focus returned to the trigger on close.
- Infinite animations can be paused (WCAG 2.2.2), and `prefers-reduced-motion` is respected throughout.
- The page is fully static (`○ /`). Decorative motion uses CSS keyframes. Fade-in reveals use `IntersectionObserver`, and server HTML stays visible without JavaScript.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) and React 19, TypeScript (strict)
- Tailwind CSS v4: theme tokens are CSS variables in `src/app/globals.css`
- [Motion](https://motion.dev) for the case preview transitions and the draggable badge
- [Simple Icons](https://simpleicons.org) for the tech logos
- Playwright and axe-core for smoke and accessibility tests
- Hosted on Vercel

## Project structure

```
src/
  app/          layout, page, metadata, sitemap, robots, icon, 404
  components/
    layout/     navigation and mobile menu
    sections/   one file per page section
    ui/         hero video, case explorer, stack orbit, marquee, etc.
    motion/     MotionProvider and Reveal
  content/      all site copy and data (site, work, stack, background)
  lib/          site URL and CV detection
public/
  hero/         hero video (MP4 and WebM, desktop and mobile) and posters
  images/       portrait and discipline images
  cv.pdf        downloadable CV
tests/          Playwright smoke and accessibility tests
```

To change the text, edit the files in `src/content/`. Components only render that data.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build and type check |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run test:e2e` | Builds the app, serves it on port 3100, runs the Playwright tests (desktop and mobile) |

Before the first test run, install the browser with `npx playwright install chromium`.

To open the dev server from a phone on the same Wi-Fi, use `http://<your-LAN-IP>:3000`. `next.config.ts` allows LAN origins in development.

## Environment

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | for a custom domain | Absolute site URL for metadata, Open Graph, sitemap and robots. On Vercel it falls back to the project's production domain. |

## Deploy

The project deploys to Vercel with zero configuration: import the repository, and every push to `main` goes to production. If you add a custom domain, set `NEXT_PUBLIC_SITE_URL` and redeploy.

## License

© 2026 Bohdan Petchenko. All rights reserved.

You may read the code for reference. The text, CV, photos, video and design may not be reused without permission.
