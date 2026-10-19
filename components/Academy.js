import Layout, { GuideCards } from "./Layout";
import articles from "../content/articles.json";
export default function Academy({ blog = false }) {
  return (
    <Layout
      title={blog ? "The dEdge blog" : "dEdge Academy"}
      path={blog ? "/blog/" : "/dedge/academy/"}
      description="Learn Solana fundamentals, wallet research and the mechanics of copy trading with the dEdge Academy."
    >
      <div className="shell page-intro">
        <p className="eyebrow">THE DEDGE ACADEMY / LEARN YOUR EDGE</p>
        <h1>
          A little more context.
          <br />A clearer next step.
        </h1>
        <p>
          Understand the chain. Read the wallet. Learn what happens between a
          trading idea and a transaction.
        </p>
      </div>
      <div className="shell academy-grid">
        {["Solana fundamentals", "Wallet research", "Copy trading"].map(
          (category) => (
            <section key={category} className="section">
              <div className="section-heading">
                <h2>{category}</h2>
                <p>Practical guides for your next research session.</p>
              </div>
              <GuideCards
                articles={articles.filter((a) => a.category === category)}
              />
            </section>
          ),
        )}
        {blog && (
          <section className="section">
            <h2>From the archive</h2>
            <ul className="check-list">
              <li>
                <a href="/meet-dEdge/">Meet dEdge ↗</a>
              </li>
              <li>
                <a href="/degen-Edge-Tool/">The dEdge research toolkit ↗</a>
              </li>
              <li>
                <a href="/copytrading/">A guide to copy trading ↗</a>
              </li>
            </ul>
          </section>
        )}
      </div>
    </Layout>
  );
}
