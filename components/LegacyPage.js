import Layout, { Action, GuideCards } from "./Layout";
import WalletForm from "./WalletForm";
import articles from "../content/articles.json";
import { site } from "../lib/site";
import { legacy } from "../lib/legacy";
export default function LegacyPage({ title, path, kind = "research" }) {
  return (
    <Layout title={title} path={path} description={legacy[path].description}>
      <header className="shell page-intro">
        <p className="eyebrow">DEDGE / SOLANA WALLET RESEARCH</p>
        <h1>{title}</h1>
        <p>
          {kind === "copy"
            ? "Understand a wallet before deciding whether to follow its trades."
            : "Read the trading activity behind a public Solana wallet."}
        </p>
      </header>
      <div className="shell article-layout">
        <aside className="toc">
          <strong>Explore dEdge</strong>
          <a href={site.app}>Free web app ↗</a>
          <a href={site.telegram}>Telegram ↗</a>
          <a href={site.academy}>Academy ↗</a>
        </aside>
        <article className="article-body">
          {legacy[path].sections.map(([heading, text]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
          <h2>
            {kind === "copy"
              ? "Research and execution are different steps."
              : "A clearer view of historical trading."}
          </h2>
          <p>
            dEdge summarizes closed trades, win rate, net SOL, token count and
            the spread of per-trade returns. Use these together: a high win rate
            alone does not tell you how much a wallet gained or lost.
          </p>
          {kind === "copy" && (
            <>
              <p>
                Copy trading uses a third-party service to replicate another
                wallet’s trades. dEdge provides wallet research, discovery and
                tracking; it does not execute those trades for you.
              </p>
              <h2>Understand the differences in execution.</h2>
              <p>
                Your entry price, transaction timing, fees and slippage may
                differ from the wallet you follow. Sniping strategies and custom
                trading programs may not be practical to copy. Historical
                returns are not a promise of future results.
              </p>
            </>
          )}
          <h2>Start with the report.</h2>
          <p>
            Check its analysis window and last update. Realized trading results
            differ from the estimated value of unsold tokens. Incomplete
            transaction history and cached data can affect a report.
          </p>
          <WalletForm />
          <h2>Take the next step in Telegram.</h2>
          <p>
            The Telegram bot supports deeper analysis, discovery and tracking
            with free and paid plans. Check current entitlements before
            subscribing.
          </p>
          <Action href={site.telegram}>Explore the bot ↗</Action>
          <p>
            <a href={site.pricing}>See current pricing</a> ·{" "}
            <a href={site.developers}>Developer documentation</a>
          </p>
        </article>
      </div>
      <section className="section shell academy-grid">
        <div className="section-heading">
          <h2>Go deeper in the Academy.</h2>
        </div>
        <GuideCards
          articles={articles
            .filter((a) =>
              kind === "copy"
                ? a.category === "Copy trading"
                : a.category === "Wallet research",
            )
            .slice(0, 3)}
        />
      </section>
    </Layout>
  );
}
