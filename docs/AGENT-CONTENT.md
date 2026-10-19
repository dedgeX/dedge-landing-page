# Agent-readable site content

Every production build generates these files directly from the exported HTML:

- `/llms.txt`: concise categorized index covering all 25 public pages, the app, developer documentation, OpenAPI, MCP setup, pricing and contact destinations.
- `/index.md`: homepage in Markdown.
- `/<existing-route>/index.md`: Markdown for each guide, index and legacy page; original HTML routes stay unchanged.
- `/llms-full.txt`: all 25 Markdown pages in one document (roughly 190 KB).

`npm run build` runs `scripts/agent-content.mjs` after Next.js exports the site. Files are written to `out/` and included automatically in the Pages artifact. They are generated build outputs, not manually maintained copies in `public/`. Use `npm start` to preview them; `next dev` alone does not generate these export-only files.

Each HTML page declares `rel="describedby"` for the index; public indexable pages also declare `rel="alternate" type="text/markdown"`. The footer links to “For agents.” The 404 page points to the index but has no advertised Markdown alternative.

The converter retains substantive text, FAQ answers (including collapsed answers), image links/alt text and comparison tables. It removes scripts, navigation and decorative markup; it converts wallet forms to GET handoff instructions. Canonical source URLs and absolute links keep downloaded files understandable outside a browser. Images are not OCR-transcribed, so screenshot-only details still need image-reading capability. Product previews remain explicitly illustrative and article notices about historical material remain present.

`npm run test:export` verifies every Markdown file and discovery link, inclusion in the index/full-text document, paragraph/table-cell preservation and local link targets. The browser suite verifies HTTP access to the index, every Markdown page and the full-text file without requiring client-side JavaScript.

The format follows the [llms.txt proposal](https://llmstxt.org/). It assists discovery and extraction; publishing these files does not guarantee a particular crawler will consume them. Existing robots and sitemap behavior remains unchanged.
