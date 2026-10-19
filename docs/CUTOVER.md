# dEdge hosting and DNS handoff

The reviewed static export is `out/`. The site uses the root of `https://dedge.pro`, with no repository-name prefix. `app.dedge.pro` and the API remain separate services. No DNS or hosting settings have been changed by this implementation.

## 1. Prepare GitHub Pages

1. Keep the current Hostinger site and a full WordPress/database/uploads backup available for rollback. Export the full GoDaddy DNS zone and record the current authoritative nameservers and all TTLs.
2. In `dedgeX/dedge-landing-page`, set Settings → Pages → Build and deployment → Source to **GitHub Actions**. Verify domain ownership with GitHub's supplied TXT record before assigning the custom domain.
3. Protect the `github-pages` environment as appropriate. The workflow builds on Node 22, checks every exported route, runs Chromium tests, uploads screenshots, then deploys using GitHub's scoped OIDC token. No PAT is required. Remove the old PAT secret after confirming nothing else uses it.
4. Review the complete local export and CI browser-review artifact before merging. Pushes to `main` deploy only after all checks pass; pull requests only build and verify. Set the Pages custom domain to `dedge.pro`. Retain `public/CNAME` and `.nojekyll`.
5. Record the successful workflow run, deployment SHA and Pages URL before DNS cutover. Do not rely on the repository-subpath URL for this root-domain build.

## 2. Move authoritative DNS from GoDaddy to Cloudflare first

This is a nameserver/DNS move. A registrar transfer is separate and is not needed to use Cloudflare DNS. If a full registrar transfer is desired, do it later after the site is stable.

1. Add `dedge.pro` to Cloudflare and import the complete current DNS zone. Compare every imported record with the GoDaddy export; automatic scanning can miss records.
2. Preserve the current Hostinger apex/www targets for this first phase. Preserve **all app/API subdomains, MX, SPF, DKIM, DMARC, CAA, verification TXT and other service records**. Do not replace the `app` record with GitHub Pages.
3. Initially keep imported web records **DNS only** (gray cloud) to avoid introducing proxy behavior at the same time. Check mail records remain DNS only.
4. If DNSSEC is enabled at the old provider, disable it/remove the old DS record at the registrar before switching nameservers. Wait for that change to propagate. Do not leave an obsolete DS record in place.
5. At GoDaddy, change the authoritative nameservers to the exact pair Cloudflare assigns. Wait until Cloudflare marks the zone Active. Verify the existing website, app, API and mail still work.
6. Once stable, enable Cloudflare DNSSEC and publish its new DS record at the registrar. Keep the old zone export for rollback.

Source: [Cloudflare full DNS setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/).

## 3. Switch only the marketing website to GitHub Pages

Lower the apex/www TTL in advance if possible. In Cloudflare, replace the old marketing website's apex records with GitHub Pages records. Leave app, API and mail untouched.

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | dedgex.github.io | DNS only |

Remove conflicting Hostinger apex A/AAAA records. If you retain IPv6, use only the current GitHub Pages AAAA values from the documentation. Do not point `www` at a repository path. Keep the GitHub ownership TXT record. Check any CAA restrictions permit GitHub's certificate issuer.

Wait for GitHub's DNS check and certificate issuance, then enable **Enforce HTTPS** in Pages. Keep Cloudflare DNS only through this verification. Proxying is optional later; if enabled, use Full (strict), never Flexible, and verify redirects, TLS, caching and analytics again.

Source: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [official deployment workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## 4. Verify after cutover

- Check `dedge.pro` and `www.dedge.pro` resolve as intended and HTTPS succeeds without a certificate warning; confirm www redirects to the canonical apex domain.
- Open the homepage, `/dedge/academy/`, `/blog/`, all 18 article paths in `content/articles.json`, and the four legacy detail pages. Check a made-up URL returns the custom 404 **with status 404**.
- Submit a valid address and verify the destination is `https://app.dedge.pro/go?address=...`. Invalid input must stay on the website. Test with JavaScript disabled too (whitespace is trimmed with JS; native validation requires a clean address).
- Verify images load locally, `/sitemap.xml`, `/robots.txt` and canonical URLs use `https://dedge.pro`, and no old Hostinger assets are requested.
- Confirm `app.dedge.pro`, the API, Telegram links and email delivery still work.
- Use browser Network and GA DebugView/Realtime to confirm one `page_view` per document load plus one event per explicit wallet submit/app/Telegram action. Confirm the live GTM container has no competing GA tag or form-field collection. Do not enable enhanced form measurement for the wallet form.
- Submit the sitemap in the existing search-console property and monitor missing-page reports.

## Rollback

If the site fails, restore only apex/www DNS to the recorded Hostinger targets in Cloudflare. Keep Hostinger serving throughout propagation. Leave app/API/mail records unchanged. If the problem is a code regression, redeploy the last known-good GitHub Actions artifact/commit instead.

For a DNS-provider failure, restore the prior nameservers at GoDaddy using the saved zone and coordinate DNSSEC/DS records with the restored provider. Nameserver rollback takes time; prefer reverting the affected records in Cloudflare when possible. Do not delete the Cloudflare zone or Hostinger backup until the migration has been stable and verified.
