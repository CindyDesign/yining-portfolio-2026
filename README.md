# Yining Portfolio 2026

Premium minimalist UX portfolio — Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## Stack

- **Next.js 15** (App Router, RSC, `next/image`, `next/font`)
- **React 19**
- **Tailwind CSS 3** with a custom `ink` / `glow` token set
- **TypeScript** (strict)

## Architecture

```
yining-portfolio-2026/
├── app/
│   ├── layout.tsx          # Root layout: fonts, <SiteNav/>, <SiteFooter/>, metadata
│   ├── page.tsx            # Home — hero + featured work grid
│   ├── globals.css         # Tailwind layers + ambient background + reduced-motion
│   ├── not-found.tsx       # 404
│   ├── about/
│   │   └── page.tsx        # About / contact
│   └── work/
│       └── [slug]/
│           └── page.tsx    # Dynamic case-study route (statically generated)
├── components/
│   ├── site-nav.tsx        # Top navigation
│   ├── hero.tsx            # Landing hero header
│   ├── project-card.tsx    # Responsive card w/ hover scaling
│   └── site-footer.tsx     # "Let's Connect" footer
├── lib/
│   └── projects.ts         # Single source of truth for featured work
├── public/projects/        # Preview images (add your own PNGs)
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

## Featured work (2026 update)

The project list lives in `lib/projects.ts`:

- **01 —** External Transfer Mobile Redesign
- **02 —** Building a 0‑to‑1 Video Uploading and Editing Platform for Genesis MedTech *(added)*
- **03 —** Redesign Help Center Mobile Experience *(added)*
- ~~Dashboard Design from 0‑1~~ *(removed)*

To change the lineup, edit that one file — the home grid, static params, and case-study routes all derive from it.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Add the three preview images to `public/projects/`:
`external-transfer.png`, `genesis-medtech.png`, `help-center.png`.

## Vercel CI/CD

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo. Framework preset auto-detects **Next.js** — no build config needed (`next build`, output `.next`).
3. Every push to `main` → production deploy. Every PR → a unique preview URL.

No environment variables are required for the base site.
