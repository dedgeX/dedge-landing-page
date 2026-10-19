import Layout, { Action } from "../components/Layout";
export default function NotFound() {
  return (
    <Layout title="Page not found" path="/404/" noindex>
      <section className="shell not-found">
        <p className="eyebrow">404 / OFF THE MAP</p>
        <h1>Let’s find your way back.</h1>
        <p>
          This page isn’t here. Explore the Academy or start a new wallet
          search.
        </p>
        <Action href="/">Back to home →</Action>{" "}
        <Action href="/dedge/academy/" className="button secondary">
          Browse the Academy
        </Action>
      </section>
    </Layout>
  );
}
