# Analytics ownership and verification

GA4 remains `G-KWDXQWGFJG`; GTM remains `GTM-T7DQB6MB`. The public GTM container (version 18, inspected 2026-10-19) contained two Google tags for that same GA4 destination. Initializing the container as a GA config, as the old site did, was incorrect.

The website owns the GA4 initialization and a single explicit `page_view` per full document navigation. `send_page_view: false` disables the automatic config event. Marketing links use ordinary document navigation. `page_location` is origin + pathname, excluding query strings and fragments.

The container uses a separate `gtmLayer`. Its GA tag types (`ga`, `gaawc`, `gaawe`, `googtag`) are blocked to prevent duplicate GA configuration and events; existing non-GA tags continue to run. The inspected container includes Google Ads 648410749, Clarity rj2ki4d1jj, X onqtu, Meta 708096365080698, TikTok D0IETEBC77U8TFOUJCLG, Reddit a2_fsrtjwi9ihai and Microsoft UET 187195056. These public destination IDs are not secrets. No new destination was added.

The wallet field is masked with `data-clarity-mask`. Site-owned event properties never include the wallet input. Do not configure form-value capture in GTM or analytics settings. Since the container is remotely maintained, changes to it need another network review.

| Event | Properties |
| --- | --- |
| `page_view` | Clean page URL/path and title |
| `wallet_submit` | `placement: hero` |
| `outbound_app` | App pathname only |
| `outbound_telegram` | `placement: website` |

`track()` catches analytics errors and never controls navigation or waits for an analytics callback. Blocked analytics is part of the browser test suite.

Run `LIVE_ANALYTICS=1 npm run test:browser -- --grep 'live Google'` for an explicit external-script check. The test loads the real Google scripts, intercepts GA collection without sending QA events, checks one page view and one event of each action type, and writes `artifacts/analytics-verification.json`. Other pixel endpoints are blocked during QA. This test requires external network access and is skipped in normal CI. Production destination delivery and domain-triggered tags must also be confirmed in the existing dashboards after cutover.

Reference: [Google tag restrictions](https://developers.google.com/tag-platform/tag-manager/restrict).
