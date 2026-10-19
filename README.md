# dEdge marketing site

Static Next.js Pages Router website for `dedge.pro`. Node 22, Next.js 16, React 19 and Tailwind 3. The public app and API are external and unchanged.

```sh
nvm use
npm ci
npm run build
npm run test:export
npm run test:browser
npm start
```

`npm start` serves the production export at http://localhost:3000 using Python 3. Browser tests use local Google Chrome; set `PLAYWRIGHT_EXECUTABLE_PATH` if it is elsewhere. CI installs Playwright Chromium. No CMS, secret or network fetch is required for a production build after dependency installation.

- `pages/index.js`: homepage and product previews (explicitly illustrative).
- `lib/site.js`: maintained destinations, navigation and event helper.
- `styles/globals.css`: shared responsive design tokens; fonts are bundled locally.
- `content/articles.json`: 18 WordPress articles with original paths, metadata, sanitized body HTML and table of contents.
- `pages/[slug].js`: shared static article template; `/dedge/academy/` and `/blog/` share the categorized index.
- `public/images/academy/`: local article images. `content/assets.json` records source provenance.
- `scripts/migrate.py`: offline importer for the WordPress REST posts inventory (`?_embed&per_page=100`); requires Python BeautifulSoup. Follow with `scripts/editorial.py` and `scripts/download-assets.py`. Review any regenerated content before committing. Normal builds do not run migration.
- `content/editorial-changes.json`: targeted wording corrections. Original slugs are retained even when their titles differ.
- `scripts/metadata.mjs`: deterministic sitemap and robots generation before build.
- `scripts/check-export.mjs`: route, link, image, anchor, canonical and structured-data crawl.
- `tests/site.spec.js`: browser acceptance checks and 375/768/1440px screenshots.

The wallet form submits a native GET to the app. JavaScript trims whitespace and reports accessible errors; without JavaScript, native required/base58 validation and submission still work. Only the public address goes to the app. Analytics events never include input values.

GA4 destination `G-KWDXQWGFJG` owns one explicit page view; automatic initial page views are disabled. GTM `GTM-T7DQB6MB` is retained on a separate data layer with GA tags blocked to avoid duplicate page views. Existing non-GA destinations in the GTM container remain enabled; the wallet input is masked for Clarity. Events are `wallet_submit`, `outbound_app` and `outbound_telegram`. The live GTM configuration remains an external dependency; see the cutover checklist before changing tags. All navigation remains functional if analytics is blocked.

See [analytics ownership](docs/ANALYTICS.md), [migration inventory](docs/MIGRATION.md), [verification results](docs/VERIFICATION.md) and [GitHub Pages / Cloudflare cutover and rollback](docs/CUTOVER.md). DNS changes and the later Cloudflare move are intentionally left to the coordinated cutover.
