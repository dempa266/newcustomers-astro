# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Swedish digital marketing agency website for "new customers" (newcustomers.se). Built with Astro 5, targeting SEO/SEM/CRO service pages optimized for lead generation. All user-facing content is in Swedish.

## Commands

- `npm run dev` — Dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build

## Tech Stack

- **Astro 5** with MDX for content pages and React integration
- **Tailwind CSS v4** via Vite plugin (`@tailwindcss/vite`), not PostCSS
- **HeroUI** (beta) for React components
- **GSAP** for animations
- **Fonts**: Poppins (headings), Source Sans 3 (body), plus Google Fonts (Inter, JetBrains Mono, Playfair Display) loaded via `<link>` in Layout

## Architecture

### Page Structure
Pages live in `src/pages/` as MDX files. The URL hierarchy mirrors the service structure: `/seo/`, `/seo/byra/`, `/seo/konsult/`, `/ads/`, `/sem/`, etc. Each page uses a layout and composes section components.

The homepage (`src/pages/index.mdx`) uses `PageLayout.astro` (extends `Layout.astro`) and applies a `home-cinematic` body class for distinct visual treatment.

### Layouts
- `src/layouts/Layout.astro` — Base HTML shell with breadcrumbs, Header, Footer. Sets `lang="sv"` and `data-theme="newcustomers"`.

### Sections vs Components
- `src/sections/` — Full-width page sections (Hero, Process, Testimonials, CtaImage, etc.) composed into pages via MDX
- `src/components/` — Reusable UI elements (Button, ContactForm, Nav/, etc.)
- `src/global-sections/` — Shared sections with a registry pattern (`index.ts`)

### Data Layer
- `src/data/navigation.ts` — All nav links, footer links, mobile nav. Typed with `NavGroup`/`NavLink` interfaces.
- `src/data/global-sections.ts` — Shared data like team members
- Page-specific data is defined as exported constants in MDX frontmatter (e.g., `pageLinks`, `coworkers`, `testimonials` in `index.mdx`), often JSON-encoded via `encodeURIComponent(JSON.stringify(...))` for prop passing.

### Styling System
- **CSS layers**: `@layer theme, base, components, utilities` in `src/styles/global.css`
- **Theme**: `src/styles/themes/newcustomers.css` defines all design tokens under `[data-theme="newcustomers"]` using oklch colors, then exposes them to Tailwind via `@theme inline`
- **CSS custom properties** for spacing (`--space-section`, `--space-stack`), radii (`--radius-card`), typography sizes (`--heading-h1` through `--heading-h6`), and motion (`--duration-fast`, `--ease-cinematic`)
- **Utility classes** defined in global.css: `site-container`, `section-spacing`, `section-intro`, `surface-card`, `surface-card-dark`, etc.
- Uses `color-mix(in oklab, ...)` extensively for derived colors

### Design Reference
- **`.claude/skills/design-system.md`** — Complete design system: colors, typography, section anatomy, component patterns, animation system, accessibility rules. **Read this before creating or modifying any section or component.**
- `LANDINGPAGE.md` — Recommended section flow for service pages: Hero → Social Proof → Problem → Solution → Results → Process → Services → Authority → Testimonials → CTA.
