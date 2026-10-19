import Layout, { Action, GuideCards } from "../components/Layout";
import WalletForm from "../components/WalletForm";
import Report from "../components/Report";
import { site } from "../lib/site";
import articles from "../content/articles.json";
const faqs = [
  [
    "Is the web app free?",
    "Yes. Public wallet summaries and the wallet leaderboard are free to browse without an account. Fresh analysis is subject to capacity and rate limits.",
  ],
  [
    "Do I need to connect my wallet?",
    "No. Paste a public Solana wallet address. You do not need to connect a wallet, sign a message or share a private key.",
  ],
  [
    "What does a wallet report show?",
    "Reports summarize closed trades, win rate, net SOL, token count and the distribution of per-trade returns. Check the analysis window and update time before comparing wallets.",
  ],
  [
    "What is different in Telegram?",
    "The Telegram bot offers deeper analysis, wallet discovery and tracking. Free and paid plans have different limits; check current pricing and the bot for available features.",
  ],
  [
    "Can dEdge execute or copy trades?",
    "dEdge helps you research wallets. Trade execution and copy trading are handled by third-party tools, with their own fees, settings and risks.",
  ],
  [
    "Why might a report be unavailable?",
    "Rate limits, daily analysis capacity or incomplete transaction history can affect availability. An unavailable report does not mean the wallet has no activity. The app handles report status and errors.",
  ],
];
export default function Home() {
  return (
    <Layout>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <i className="status-dot" /> THE SIGNAL BEHIND THE WALLET
          </p>
          <h1>
            Know the wallet.
            <br />
            Find your <span>edge.</span>
          </h1>
          <p className="hero-description">
            Look past the green numbers. Understand how a Solana wallet actually
            trades—with clear, free wallet research.
          </p>
          <WalletForm />
          <a className="subtle-link" href={site.wallets}>
            No wallet in mind? Explore the leaderboard <span>↗</span>
          </a>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit" />
          <Report />
          <div className="visual-caption">
            <span>PUBLIC ON-CHAIN DATA</span>
            <span>YOUR NEXT RESEARCH LEAD ↗</span>
          </div>
        </div>
      </section>
      <div className="ecosystem shell">
        <span>BUILT FOR THE SOLANA ECOSYSTEM</span>
        <div>◎ Solana</div>
        <div>pump.fun</div>
        <div>Raydium</div>
        <div>Meteora</div>
      </div>
      <section className="section shell" id="product">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / UNDERSTAND THE ACTIVITY</p>
            <h2>
              A headline is a start.
              <br />
              The context is your edge.
            </h2>
          </div>
          <p>
            Bring the important questions into focus before you follow a wallet.
          </p>
        </div>
        <div className="walkthrough">
          <div className="feature">
            <span className="feature-number">01</span>
            <h3>Look beyond win rate.</h3>
            <p>
              How often did closed trades win? Pair that number with net SOL to
              see the size of the outcome.
            </p>
            <div className="mini-metric">
              <span>
                Win rate <b>64.3%</b>
              </span>
              <span>
                Net SOL <b>+12.84</b>
              </span>
            </div>
          </div>
          <div className="feature">
            <span className="feature-number">02</span>
            <h3>See the whole spread.</h3>
            <p>
              One outsized win can hide a pattern of losses. Explore how returns
              vary across individual trades.
            </p>
            <div className="spread" aria-hidden="true">
              {[18, 35, 65, 100, 70, 40, 20, 10].map((height, i) => (
                <span key={i} style={{ height: height + "%" }} />
              ))}
            </div>
          </div>
          <div className="feature">
            <span className="feature-number">03</span>
            <h3>Keep time in the picture.</h3>
            <p>
              Check the report’s analysis window and update time. A historical
              snapshot is only part of the story.
            </p>
            <div className="time-preview">
              <span>ANALYSIS WINDOW</span>
              <strong>
                15 days <span>◷</span>
              </strong>
            </div>
          </div>
        </div>
        <p className="fine">
          Illustrative metrics above. Reports reflect available historical data,
          not future performance.
        </p>
      </section>
      <section className="section discovery">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / FIND YOUR NEXT QUESTION</p>
              <h2>
                Start with a signal.
                <br />
                Follow the research.
              </h2>
            </div>
            <p>
              No address to paste? Explore wallets and tokens to find a starting
              point.
            </p>
          </div>
          <div className="discovery-grid">
            <a href={site.wallets} className="discovery-card">
              <div className="discovery-icon">↗</div>
              <p className="eyebrow">WALLET LEADERBOARD</p>
              <h3>
                Meet the wallets.
                <br />
                Check the track records.
              </h3>
              <p>
                Compare wallet performance over a recent 15-day window. Open a
                report to understand the details.
              </p>
              <span className="text-link">Browse wallets ↗</span>
            </a>
            <a href={site.trending} className="discovery-card cyan-card">
              <div className="discovery-icon">◎</div>
              <p className="eyebrow">TRENDING TOKENS</p>
              <h3>
                See what’s moving.
                <br />
                Ask who’s trading.
              </h3>
              <p>
                Explore trending Pump.fun tokens, then bring a wallet back to
                the analyzer for a closer look.
              </p>
              <span className="text-link">Explore trending tokens ↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section shell telegram" id="telegram">
        <div className="telegram-preview">
          <div className="chat-header">
            <span className="telegram-logo">➤</span>
            <div>
              <strong>dEdge</strong>
              <p>Research, inside Telegram</p>
            </div>
          </div>
          <div className="chat-message">
            <p className="eyebrow">YOUR RESEARCH WORKSPACE</p>
            <h3>Go a layer deeper.</h3>
            <p>
              Analyze a wallet. Explore new leads. Keep the wallets you care
              about in view.
            </p>
            <div className="chat-options">
              <span>◈ Analyze wallet</span>
              <span>⌕ Discover wallets</span>
              <span>◎ Track wallets</span>
            </div>
          </div>
          <p className="fine">Illustrative interface · Features vary by plan</p>
        </div>
        <div>
          <p className="eyebrow">03 / TAKE IT FURTHER</p>
          <h2>
            The quick check is
            <br />
            just the beginning.
          </h2>
          <p className="section-copy">
            Take your research into Telegram for deeper wallet analysis,
            discovery tools and ongoing tracking.
          </p>
          <ul className="check-list">
            <li>Explore the detail behind a wallet’s activity</li>
            <li>Find wallets that fit your research criteria</li>
            <li>Track wallets and review trade-close alerts</li>
          </ul>
          <Action href={site.telegram}>
            Explore Telegram <span>↗</span>
          </Action>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A CLEAR PLACE TO START</p>
            <h2>Start free. Go deeper when you need to.</h2>
          </div>
        </div>
        <div className="plans">
          <div>
            <p className="eyebrow">WEB APP / FREE</p>
            <h3>Your first look, without the friction.</h3>
            <p>
              Public wallet summaries, leaderboard browsing and trending tokens.
              No account or wallet connection required.
            </p>
            <Action>Open the free app ↗</Action>
          </div>
          <div>
            <p className="eyebrow">TELEGRAM / FREE + PAID PLANS</p>
            <h3>More depth. More room to explore.</h3>
            <p>
              Paid plans increase analysis and discovery limits and include full
              trade-close alerts for tracked wallets.
            </p>
            <Action href={site.pricing} className="button secondary">
              View current plans ↗
            </Action>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE DEDGE ACADEMY</p>
            <h2>Build your understanding.</h2>
          </div>
          <a href={site.academy} className="text-link">
            Explore all guides ↗
          </a>
        </div>
        <GuideCards articles={[articles[2], articles[9], articles[15]]} />
      </section>
      <section className="section shell faq" id="faq">
        <div>
          <p className="eyebrow">A FEW THINGS TO KNOW</p>
          <h2>
            Good questions.
            <br />
            Clear answers.
          </h2>
          <a href={site.contact} className="text-link">
            Get in touch ↗
          </a>
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="final-cta shell">
        <p className="eyebrow">YOUR NEXT MOVE STARTS WITH CONTEXT</p>
        <h2>Find the story behind the wallet.</h2>
        <Action>
          Open dEdge <span>↗</span>
        </Action>
        <p className="fine">Free wallet research. No account needed.</p>
      </section>
    </Layout>
  );
}
