# Verification — 2026-10-19

The finished site was built and reviewed locally. No remote deployment, DNS change, nameserver switch or application/API change was performed.

| Check | Result |
| --- | --- |
| Production build | Passed on Node 22.14.0, Next.js 16.4.2, React 19.3.1 |
| Export coverage | 25 public routes plus the custom 404 |
| Academy | All 18 posts at original URLs; 89 local article images |
| Static crawl | No missing local links, anchors or assets; correct route canonicals; valid JSON-LD; no WordPress/Hostinger asset dependencies |
| Browser suite | **11 tests passed**, including the opt-in live Google-script check |
| Responsive review | Homepage, Academy and article at 375, 768 and 1440px; no horizontal overflow; screenshots reviewed |
| Form | Valid GET handoff, empty/malformed/invalid-length rejection, whitespace trimming, keyboard submission, accessible errors |
| No JavaScript | Native validation and successful valid-address submission; padded addresses rejected natively rather than silently altered |
| Navigation / interaction | Mobile menu, FAQ expansion, keyboard skip link and reduced-motion behavior passed |
| Accessibility | Axe WCAG A/AA checks passed on home, Academy, article and 404 at mobile and desktop widths, including contrast |
| Analytics | One GA page view and one wallet/app/Telegram action event; wallet values absent; blocked or throwing analytics does not block navigation |
| Source hygiene | Prettier check and `git diff --check` passed |
| Production dependency audit | Zero reported production vulnerabilities |

The static export was served over HTTP for browser checks. App destinations were intercepted for form/navigation tests, so the tests do not depend on app reports or consume analysis capacity. The separate live Google-script test intercepts collection and blocks other pixels; its successful result is saved in `artifacts/analytics-verification.json`. GA also emitted its configured `form_start` event without wallet values.

The external-link crawl results are in `artifacts/external-links.json`. App contact, developer, pricing, privacy and wallet-list links returned 200, as did the Telegram destinations and product documentation. Two third-party article citations returned 403 to the automated crawler (Britannica and Token Metrics); these were retained as original citations rather than assumed broken. The app homepage and trending endpoint timed out in the batch crawl. A homepage retry returned 200. Trending availability should be rechecked at cutover; it is a maintained destination linked by the current app and outside this static site's control.

Tailwind 3 was retained as requested. The full development dependency audit still reports 7 advisories (5 high, 2 moderate) in its build-time dependency chain; npm's proposed major-version fix upgrades to Tailwind 4. These packages are not shipped as a server at runtime: production is static HTML/CSS/JS. Production dependency audit reports zero vulnerabilities. Review the Tailwind toolchain separately before accepting untrusted build inputs.

Screenshots are generated into `artifacts/` and the interactive Playwright report is at `artifacts/browser-report/index.html`. These generated screenshots/report are ignored by Git and uploaded by the GitHub Actions workflow. The deployment job requires a successful build, crawl and offline browser suite; the opt-in external analytics test is deliberately not a CI network dependency.

GitHub Pages custom-domain provisioning, HTTPS issuance, production dashboard delivery and the GoDaddy → Cloudflare transition require the later cutover. Follow [CUTOVER.md](CUTOVER.md), with the existing Hostinger site kept available for rollback.
