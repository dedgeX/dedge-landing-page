# Academy migration inventory

Inventoried the live WordPress REST posts and pages endpoints on 2026-10-19. Found **18 published posts** and **2 pages** (homepage and `/dedge/academy/`); all are covered. The static export also retains `/blog/`, `/meet-dEdge/`, `/degen-Edge-Tool/`, `/copytrading/` and `/solana-wallet-analyzer/`.

All 89 images referenced by article bodies are local. The initial 101-image download included 12 images from WordPress related-post widgets; these unused duplicates were removed after stripping those widgets. Original source URLs and checksums are in `content/migration-inventory.json`.

The importer removes scripts, Elementor widgets, navigation, duplicate titles and layout attributes, then assigns stable section IDs. It preserves instructional text, lists, tables, inline emphasis, links and article images. Articles are reviewed as historical educational material; a visible note distinguishes current product plans and third-party execution. Targeted corrections remove fixed plan limits, unsupported percentages and execution guarantees; `content/editorial-changes.json` records them. Three promotional/incomplete article titles and one typo were cleaned up without changing their slugs.

The homepage feature copy was checked against the [current app](https://app.dedge.pro/), [about page](https://app.dedge.pro/about), [pricing](https://app.dedge.pro/pricing) and [product metrics documentation](https://dedge-v2.gitbook.io/dedge-docs/getting-started/understanding-the-metrics). No live prices are duplicated.

| Original URL path (retained) | Display title | Source body words | Migrated body words |
| --- | --- | ---: | ---: |
| `/copy-trading-on-solana-with-dedge-tradewiz/` | Copy Trading on Solana with TradeWiz + dEdge | 1484 | 1480 |
| `/copy-trading-on-solana-with-dedge-dbot/` | Copy Trading on Solana with dEdge + Trojan | 922 | 908 |
| `/filtered-wallets-find-traders-that-match-your-strategy-2/` | How to Track and Analyse Wallets | 1181 | 1174 |
| `/filtered-wallets-find-traders-that-match-your-strategy/` | Filtered Wallets — Find Traders That Match Your Strategy | 529 | 520 |
| `/ia-insights-how-dedge-is-changing-the-analysis-game-2/` | Copy Trading on Solana with dEdge + dBot | 1232 | 1218 |
| `/ia-insights-how-dedge-is-changing-the-analysis-game/` | AI Insights: Understanding a Wallet Analysis | 403 | 399 |
| `/curated-wallets-data-backed-shortcuts-to-profitable-traders/` | Tracking Wallets: Why It Matters and How to Add a Wallet | 677 | 663 |
| `/wallet-finder-discover-the-most-profitable-traders-on-solana-2/` | Curated Wallets: A Starting Point for Wallet Research | 558 | 555 |
| `/wallet-finder-discover-the-most-profitable-traders-on-solana/` | Wallet Finder: Discover Wallets to Research on Solana | 290 | 271 |
| `/cex-vs-dex-what-you-need-to-know-2/` | Following Wallets ≠ Following Profits | 485 | 480 |
| `/cex-vs-dex-what-you-need-to-know/` | CEX vs DEX – What you need to know | 2448 | 2442 |
| `/copy-trading-in-crypto-your-shortcut-through-the-noise/` | Copy Trading in Crypto: Your Shortcut Through the Noise | 731 | 722 |
| `/manual-trading-vs-copy-trading-which-one-fits-you/` | Manual Trading vs Copy Trading: Which One Fits You? | 1706 | 1695 |
| `/solana-explained/` | Solana Explained | 1407 | 1405 |
| `/what-is-jito-bloxroute-and-swqos/` | What is Jito, BloXroute and SWQoS? | 1613 | 1613 |
| `/landing-transactions-on-solana-3/` | Solana Fees Explained | 855 | 852 |
| `/landing-transactions-on-solana-2/` | What is an RPC? And why it affects your trades | 1151 | 1142 |
| `/landing-transactions-on-solana/` | Landing Transactions on Solana | 1794 | 1790 |

Word counts differ slightly after removing repeated H1 titles and applying the recorded corrections. No article was replaced with a summary. The four repository detail pages were refreshed with current, route-specific explanations and contextual Academy links.
