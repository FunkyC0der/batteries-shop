# Agent guide

`AGENTS.md` and `CLAUDE.md` both point here; update this file, not the entrypoints.

## Workspace rules

- **Stack**: Next.js 16.2.10 App Router, React 19.2.4, TypeScript strict (`@/*` → `src/*`), Tailwind CSS v4 via `@tailwindcss/postcss`, Vitest 4, ESLint 9 flat config (`next/core-web-vitals` + `next/typescript`), `vite-node` for TS scripts, `sharp` for images. No database, no backend, no CI config in repo.
- **This Next.js version has breaking changes** — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js code. Heed deprecation notices.
- **Static export**: `next.config.ts` sets `output: "export"`, `trailingSlash: true`, `images.unoptimized`. Build output is `out/`. Every dynamic route uses `generateStaticParams` + `dynamicParams = false`; no server-only runtime features (no API routes beyond static route handlers, no middleware, no `next/image` optimization).
- **Deploy target**: Vercel (`vercel.json` redirects, `NEXT_PUBLIC_SITE_URL` / `VERCEL_PROJECT_PRODUCTION_URL` in `src/lib/site-config.ts`). Custom HTTP headers, if ever needed, go in `vercel.json` (`headers`) — Vercel ignores Cloudflare's `_headers` file.
- **UI/style**: no style-guide skill in this repo. Design tokens live in `src/app/globals.css` (`:root` vars mapped through `@theme inline`) — use `bg-primary`, `text-muted-foreground`, `border-border`, etc., not raw hex. Reuse `src/components/*` (section-heading, cta-panel, product-card, breadcrumbs…). UI copy is Ukrainian (`lang="uk"`), brand "СИСТЕМІКА" via `siteConfig`.
- **Competitor/market research**: start with [docs/competitor-references.md](docs/competitor-references.md). `.artifacts/` (gitignored) holds local UX-audit/redesign research; `graphify-out/` is generated and ignored.
- **Principle rules**:
  - Catalog "schema" changes (fields, enums, categories) must update together: `src/lib/types.ts`, `schema/*.schema.json`, `scripts/validate-catalog.mjs`, `src/lib/catalog/taxonomy.ts`, `src/lib/catalog/category-content.ts` — plus tests.
  - Client components (`"use client"`) must not import `@/lib/data`, `@/lib/catalog`, or `@/lib/catalog/*` except `list-projection` (enforced by `catalog:validate` and `tests/client-catalog-imports.test.ts`).
  - Never hand-edit generated files: `public/catalog/*.json` (`npm run catalog:projection`), `vercel.json` redirects (`npm run seo:redirects`).
  - `siteConfig.contactsPublished` stays `false` until real contacts exist — never publish placeholder contacts.

## Backlog gate

- Source of truth for pending scope: [docs/seo-todo.md](docs/seo-todo.md) (post-deploy SEO checks, content work, follow-ups). There is no active epic/roadmap doc.
- Don't tick `[x]` items or rewrite the backlog until the task is finished and verified. Out-of-scope findings → add as new unchecked items, don't silently expand scope.

## Start here

| Task | Look first |
|---|---|
| Small code fix | the file + its nearest test in `tests/` |
| Add/edit products or services | `data/{products,services}/<category>/<slug>.json`, `schema/*.schema.json`, `scripts/validate-catalog.mjs` |
| New product category / facet | `src/lib/catalog/taxonomy.ts`, `category-content.ts`, `src/lib/product-facets.ts` (sync list under Workspace rules) |
| Catalog listing/filters/pagination UI | `src/components/catalog-browser.tsx`, `src/lib/catalog-navigation.ts`, `src/lib/catalog/list-projection.ts` |
| Product/service page | `src/app/products/[slug]/page.tsx`, `src/app/services/[slug]/page.tsx` |
| SEO (metadata, JSON-LD, sitemap, llms.txt, redirects) | `src/lib/seo/*`, `src/app/{sitemap,robots,manifest}.ts`, `src/app/llms*.txt/route.ts`, `scripts/build-redirects.ts`, `docs/seo-todo.md` |
| Order/contact actions | `src/lib/order-actions.ts`, `src/lib/site-config.ts` |
| Supplier imports | `scripts/import-namato-products.mjs`, `scripts/import-solarverse.mjs`, `scripts/lib/catalog-files.mjs` |
| Styling | `src/app/globals.css` tokens, existing components |
| Historical context | `git log --oneline` (descriptive commit messages), `docs/seo-todo.md`, `.artifacts/` |

## Efficient implementation workflow

- Local env: no DB/Docker. `npm run dev` runs `catalog:projection` then `next dev` on :3000 (catalog loader bypasses its cache in development). Static preview: `npm run build` then `.claude/launch.json` "seo-preview" (`npx serve out -l 4173`).
- Verification gates — minimal per change type:

| Change type | Gate |
|---|---|
| `src/lib` / `scripts` logic | `npx tsc --noEmit`, `npm run lint`, `npm test` |
| Catalog JSON data | `npm run catalog:validate`, `npm test`; new images → `npm run images:optimize` |
| `legacySlugs` / slug renames | `npm run seo:redirects`, commit `vercel.json`, `npm test` |
| Routes, `generateStaticParams`, metadata, client components | all of the above + `npm run build` (validate → projection → `next build`), spot-check `out/` |
| Styling only | `npm run lint` + visual check in dev/preview |
| Docs only | no gate; check referenced paths exist |

## Application map

- No provider tree: `src/app/layout.tsx` is a server component rendering site JSON-LD, `Header`, `<main>`, `FloatingQuickOrder`, `Footer`; root `metadata`/`viewport` live there.
- Routes: `/`, `/products`, `/products/[slug]`, `/products/category/[category]`, `/services`, `/services/[slug]`, `not-found`, `sitemap.ts`, `robots.ts`, `manifest.ts`, `llms.txt` & `llms-full.txt` route handlers.
- Data layer (server/build-time only): `src/lib/catalog/loader.ts` (fs read of `data/`, cache, slug maps) → `queries.ts` (filter/featured/by-slug) → `index.ts` barrel; `src/lib/data.ts` exposes module-level `products`/`services`.
- Client data path: `list-projection.ts` builds slim list items → `scripts/build-catalog-projection.ts` writes `public/catalog/{products,services}.json` → `catalog-browser.tsx` fetches `PRODUCTS_CATALOG_URL`. URL state (page, facets, return anchor) in `catalog-navigation.ts` (`PRODUCTS_PER_PAGE = 24`).
- Client components: `catalog-browser`, `product-facet-controls`, `product-gallery`, `catalog-back-link`, `floating-quick-order`, `header`.
- SEO: `src/lib/seo/metadata.ts` (`absoluteUrl`, `buildPageMetadata`), `json-ld.ts`, `product-seo.ts` (`parsePrice`, brand, meta description).
- Test config: `vitest.config.ts` (only `@` alias, node env, no setup file); tests in `tests/*.test.ts`.

## Data model (catalog invariants)

- Category = folder name (not a JSON field); slug = filename and must match `slug`, `^[a-z0-9-]+$`; `id` is derived from slug; `$schema` is stripped on load.
- Slugs and `legacySlugs` share one namespace (duplicates throw). Legacy slugs still get static pages (noindex via `buildPageMetadata`) plus 308 redirects in `vercel.json`; sitemap excludes them and every URL has a trailing slash. `tests/seo.test.ts` asserts `vercel.json` stays in sync.
- `direction` must match the category's direction in `taxonomy.ts`; `status` ∈ in-stock/preorder/consult; `source` ∈ manual/solarverse/namato.
- `price` is a free-form Ukrainian string parsed by `parsePrice`; `showPrice` gates whether price appears on cards and in order messages.
- `locked: true` → importers skip the file; importers only update/delete unlocked files of their own `source` (`resolveUpsert`, `deleteStaleProducts`).
- `image`/`images` must be absolute `/…` paths that exist under `public/`.
- Category pages enter the sitemap only with ≥ `MIN_INDEXABLE_PRODUCTS` (3) products.

## Tests and mocks

- No mocking layer: tests read the real `data/` via the loader (`process.cwd()`), so run from repo root, and data edits can break assertions that reference specific slugs (e.g. legacy-slug case in `tests/catalog.test.ts`). Use `resetCatalogCache()` if a test manipulates env/data. No network, no jsdom/RTL — keep logic in `src/lib` and test it there rather than rendering components.
- Nearest examples: catalog queries → `tests/catalog.test.ts`; URL/pagination state → `tests/catalog-navigation.test.ts`; facets → `tests/product-facets.test.ts`; SEO, sitemap (imports `src/app/sitemap` default export directly), metadata, redirect sync → `tests/seo.test.ts`; order links → `tests/order-actions.test.ts`; architecture guard via source scan → `tests/client-catalog-imports.test.ts`.
