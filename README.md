# Jeremy Swagger — Portfolio

Personal portfolio site: a React + TypeScript single-page app built with Vite, prerendered at build time so the homepage and each case study (`/work/<slug>`) ship real HTML to crawlers and AI agents.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Client build, SSR build, per-route `<head>` tags (`scripts/generate-route-heads.mjs`), then prerender (`scripts/prerender.mjs`) |
| `npm test` | Run the Vitest suite |
| `npm run typecheck` | Type-check `src/` with `tsc` |
| `npm run lint` | ESLint (JavaScript files only; see note below) |
| `npm run preview` | Serve the built `dist/` locally |

## Layout

```
src/
  pages/            Route-level screens: HomePage, CaseStudyPage, NotFound
  features/home/    Homepage sections and their parts (Hero, About, Services, Experience, Contact, carousel, accordion, ...)
  features/case-study/  Case study page pieces (workflow visual, metric charts)
  components/       Shared UI used across pages (Navbar, Reveal, StrengthStats, ...); components.css holds the shared styles
  data/  types/     Content and its types
  test/             Vitest setup and helpers
```

Tests live next to the code they cover (`Navbar.test.tsx` beside `Navbar.tsx`).

## Adding a case study

1. Add an entry to `src/data/caseStudies.ts`.
2. Add its URL to `public/sitemap.xml`.

The route, prerendered HTML and page `<head>` are generated from the data at build time.

## Notes

- `docs/` holds working notes and the résumé PDF; nothing in it ships with the site.
- ESLint does not lint `.ts`/`.tsx` yet: `typescript-eslint` doesn't support TypeScript 7. Use `npm run typecheck` until it does.
