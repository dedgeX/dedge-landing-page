import Layout, { Action, GuideCards } from "../components/Layout";
import articles from "../content/articles.json";
import { site } from "../lib/site";
export default function Article({ article, related }) {
  return (
    <Layout
      title={article.title}
      description={article.description}
      path={article.path}
      article={article}
    >
      <header className="shell page-intro">
        <p className="eyebrow">
          <a href={site.academy}>ACADEMY</a> / {article.category.toUpperCase()}
        </p>
        <h1>{article.title}</h1>
        <div className="article-meta">
          dEdge Academy · {article.minutes} min read · Published {article.date}
        </div>
      </header>
      <div className="shell article-layout">
        <aside className="toc" aria-label="Table of contents">
          <strong>In this guide</strong>
          {article.toc.map((item) => (
            <a key={item.id} href={"#" + item.id}>
              {item.title}
            </a>
          ))}
        </aside>
        <article className="article-body">
          <div className="article-note">
            This guide preserves the original educational material. Screenshots
            and third-party interfaces may have changed. dEdge provides
            research; third-party tools execute trades. For current dEdge limits
            and subscriptions, see <a href={site.pricing}>current plans</a>.
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
          <div className="article-cta">
            <h3>Put the context to work.</h3>
            <p>
              Start with a free public wallet report. Look at the analysis
              window, the returns and the details.
            </p>
            <Action>Research a wallet ↗</Action>
          </div>
        </article>
      </div>
      <section className="section shell academy-grid">
        <div className="section-heading">
          <h2>Keep learning.</h2>
          <a href={site.academy} className="text-link">
            All guides ↗
          </a>
        </div>
        <GuideCards articles={related} />
      </section>
    </Layout>
  );
}
export function getStaticPaths() {
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  return {
    props: {
      article,
      related: articles
        .filter((a) => a.slug !== article.slug)
        .sort(
          (a, b) =>
            Number(b.category === article.category) -
            Number(a.category === article.category),
        )
        .slice(0, 3),
    },
  };
}
