import Head from "next/head";
import { site, navigation, track } from "../lib/site";
export function Action({
  href = site.app,
  children = "Open app",
  className = "button",
  ...props
}) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
export function GuideCards({ articles }) {
  return (
    <div className="guide-grid">
      {articles.map((a, i) => (
        <a className="guide" href={a.path} key={a.path}>
          <div className={"guide-art art-" + (i % 3)} aria-hidden="true">
            <span>
              {a.category === "Solana fundamentals"
                ? "◎"
                : a.category === "Copy trading"
                  ? "⇄"
                  : "⌁"}
            </span>
            <span className="art-label">dEdge / Academy</span>
          </div>
          <div className="guide-body">
            <p className="eyebrow">
              {a.category} <span>· {a.minutes} min</span>
            </p>
            <h3>{a.title}</h3>
            <span className="text-link">Read guide ↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}
export default function Layout({
  children,
  title = "Know the wallet. Find your edge.",
  description = "Research Solana wallets with free dEdge reports. Explore win rate, net SOL and trading returns, then go deeper with Telegram and the Academy.",
  path = "/",
  article,
  noindex = false,
}) {
  const canonical = site.origin + path;
  function outbound(e) {
    const a = e.target.closest("a");
    if (!a) return;
    if (a.href.startsWith(site.app))
      track("outbound_app", { destination: new URL(a.href).pathname });
    else if (a.href.startsWith("https://t.me/"))
      track("outbound_telegram", { placement: "website" });
  }
  return (
    <div onClick={outbound}>
      <Head>
        <title>{title} | dEdge</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <link
          rel="describedby"
          href={site.origin + "/llms.txt"}
          type="text/plain"
        />
        {!noindex && (
          <link
            rel="alternate"
            type="text/markdown"
            href={canonical + "index.md"}
            title="Markdown version"
          />
        )}
        <meta
          name="robots"
          content={noindex ? "noindex,follow" : "index,follow"}
        />
        <meta property="og:title" content={title + " | dEdge"} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content={article ? "article" : "website"} />
        <meta property="og:image" content={site.origin + "/social.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon-v3.ico" sizes="any" />
        <link rel="icon" href="/favicon-v3.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              article
                ? {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: title,
                    description,
                    datePublished: article.date,
                    dateModified: article.modified,
                    author: { "@type": "Organization", name: "dEdge" },
                    mainEntityOfPage: canonical,
                    image: site.origin + "/social.png",
                  }
                : {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "dEdge",
                    url: site.origin,
                  },
            ).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="shell nav">
          <a href="/" className="brand" aria-label="dEdge home">
            <img
              className="brand-logo"
              src="/images/dedge-mark-v3.svg"
              alt="dEdge logo"
              width="36"
              height="36"
            />
            dEdge
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <Action>
            Open app <span aria-hidden="true">↗</span>
          </Action>
          <details className="mobile-menu">
            <summary aria-label="Toggle navigation">☰</summary>
            <nav aria-label="Mobile navigation">
              {navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) =>
                    e.currentTarget.closest("details").removeAttribute("open")
                  }
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="shell footer">
        <div>
          <a href="/" className="brand" aria-label="dEdge home">
            <img
              className="brand-logo"
              src="/images/dedge-mark-v3.svg"
              alt="dEdge logo"
              width="36"
              height="36"
            />
            dEdge
          </a>
          <p>More context. Better questions.</p>
          <p className="fine">Solana wallet research, made clearer.</p>
        </div>
        <div className="footer-links">
          <a href={site.academy}>Academy</a>
          <a href="/blog/">Blog</a>
          <a href={site.developers}>Developers</a>
          <a href={site.pricing}>Pricing</a>
          <a href={site.contact}>Contact</a>
          <a href={site.privacy}>Privacy</a>
          <a href="/llms.txt">For agents</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} dEdge</span>
          <span>Historical performance does not predict future returns.</span>
          <a href="https://x.com/dEdge_Solana">X ↗</a>
        </div>
      </footer>
    </div>
  );
}
