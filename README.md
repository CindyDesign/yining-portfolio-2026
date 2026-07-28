# Yining Portfolio 2026

Premium minimalist UX portfolio — Next.js (App Router) + Tailwind CSS, deployed on Vercel.

Live: [cindyzhangdesign.app](https://cindyzhangdesign.app/)

## Stack

- **Next.js 15** (App Router, RSC, `next/image`, `next/font`)
- **React 19**
- **Tailwind CSS 3** with a custom `bg` / `ink` / `accent` / `line` token set
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
├── public/projects/        # Card thumbnails + case-study imagery (.jpg)
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

## Featured work

The project list lives in `lib/projects.ts` and renders in array order. As of the
2026 landing-page redesign the grid runs **descending** — newest numbered work at
the top:

- **03 —** Redesign Help Center Mobile Experience
- **02 —** Building a 0‑to‑1 Video Uploading and Editing Platform for Genesis MedTech
- **01 —** Mobile External Transfer Redesign — PNC Bank

The `index` is pinned to the project, not to its slot, so the numbering stays
stable if the order changes again.

To change the lineup, edit that one file — the home grid, static params, and
case-study routes all derive from it.

### Editing a project

Each entry carries two layers:

- **Card copy** (`title`, `period`, `summary`, `image`) — what the landing grid shows.
- **Case study** (`meta`, `hero`, `caseStudy[]`) — what `/work/<slug>` renders.

Card `period` and `meta.timeline` are deliberately separate: the card shows the
headline year, the case study shows the full engagement span.

## Images

Thumbnails and case-study imagery live in `public/projects/` as `.jpg`. Filenames
with spaces are URL-encoded in `lib/projects.ts` (e.g.
`/projects/Help%20Center%20Mobile%20ExperienceThumbnail.jpg`) — keep that encoding
when adding new files, or rename to kebab-case first.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Vercel CI/CD

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo. Framework preset auto-detects **Next.js** — no build config needed (`next build`, output `.next`).
3. Every push to `main` → production deploy. Every PR → a unique preview URL.

No environment variables are required for the base site.

## Changelog

**2026 landing-page redesign**
- Reordered the featured grid 03 → 02 → 01.
- Retitled 02 to lead with the 0‑to‑1 framing.
- Shortened the 02 card summary to the outcome rather than the metrics.

**2026 rebuild**
- Removed "02 / Dashboard Design from 0‑1".
- Added Genesis MedTech 0‑to‑1 video platform.
- Added Help Center mobile redesign.
- Added full case-study content and deck-sourced card images.
