# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build
npm run lint     # eslint (flat config, next core-web-vitals + typescript)
npm start        # serve production build
```

No test framework is configured.

## Architecture

Next.js 16 App Router site for Sophos Technology Consultancy (UAE fintech consultancy). TypeScript, Tailwind CSS v4, framer-motion for animations.

### Layout

`src/app/layout.tsx` is the root layout — loads Google Fonts (Open Sans, Roboto, Roboto Flex, Inter) as CSS variables, renders `<Header />` + fixed-height spacer (94px) + `<main>` + `<Footer />`. Metadata uses template pattern for page titles.

### Routing

All pages under `src/app/`. Each route has `page.tsx` and some have `layout.tsx` for metadata:
- `/` — homepage (hero, services grid, about, projects, solutions, blog preview)
- `/services` — detailed service listings
- `/projects` — portfolio grid using `ProjectCard`
- `/about` — company info + expertise grid
- `/blog` — blog grid linking to external WordPress posts
- `/contact` — contact form with framer-motion animations

### Components (`src/components/`)

- `Header` — fixed nav, mobile hamburger menu (`'use client'`). Desktop/mobile toggle via CSS classes (`r-desktop-nav`, `r-mobile-menu-btn`)
- `Footer` — 3-column footer (logo+desc, menu links, quick links) + social icons
- `HeroSection` — homepage hero with gradient bg, CTA button
- `ServiceCard` — colored card with icon, title, description. Colors adapt text contrast based on `bgColor` prop
- `ProjectCard` — hover-effect card with tags. Uses inline `onMouseEnter/Leave` for hover styles
- `ContactForm` — standalone form component (currently unused — contact page has its own inline form)

### Styling Approach

**Hybrid inline styles + CSS classes.** Most styling is inline `style={{}}` objects. Responsive behavior uses CSS classes prefixed with `r-` (e.g., `r-container`, `r-grid-3`, `r-flex-row`, `r-hero`, `r-section`, `r-clip-section`) defined in `globals.css` with media query breakpoints at 980px, 768px, 480px. Many overrides use `!important`.

CSS custom properties in `:root` for brand colors/fonts. Tailwind is imported but barely used — `@import "tailwindcss"` in globals.css with `@theme inline` mapping to CSS vars.

### Brand Colors

- Primary: `#272a49` (navy)
- Accent: `#25e89d` (mint/green)
- Secondary: `#2ea3f2` (blue)
- Text: `#666666`, Headings: `#121212`
- Buttons: `#242424` bg, white text, 14px border-radius

### Fonts (CSS variables)

- `--font-open-sans` — body text
- `--font-roboto` — headings, buttons
- `--font-roboto-flex` — navigation
- `--font-inter` — subtitles/taglines

### Container Pattern

All content sections use `maxWidth: '1080px', width: '80%', margin: '0 auto'` for centering. On mobile, `.r-container` expands to 90-92%.

### Static Assets

Images in `public/images/`: `logo.png`, `hero.png`, `about.png`, `projects.png`, `solutions.png`.

### Path Aliases

`@/*` maps to `./src/*` (tsconfig paths).

### Key Patterns

- Pages that need state/effects use `'use client'` directive
- Server components export `metadata` for SEO
- `h2::after` pseudo-element adds a decorative underline globally
- Blog posts link to external WordPress URLs (sophostc.com)
- Contact form submission is a placeholder `alert()` — no backend
