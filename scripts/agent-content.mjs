import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { load } from "cheerio";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import { site } from "../lib/site.js";

// Convert the final exported HTML, so the agent view cannot drift from the UI.
const sitemap = load(fs.readFileSync("out/sitemap.xml", "utf8"), {
  xmlMode: true,
});
const articles = JSON.parse(fs.readFileSync("content/articles.json", "utf8"));
const converter = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
converter.use(gfm);
converter.addRule("linkedCards", {
  filter: (node) =>
    node.nodeName === "A" && !!node.querySelector("h2,h3,p,div"),
  replacement: (content, node) =>
    `\n\n${content.trim()}\n\n[View page](${node.getAttribute("href")})\n\n`,
});
const pages = sitemap("loc")
  .toArray()
  .map((el) => {
    const canonical = sitemap(el).text();
    const route = new URL(canonical).pathname;
    const $ = load(
      fs.readFileSync(path.join("out", route, "index.html"), "utf8"),
    );
    const main = $("main").clone();
    main.find("h1 br,h2 br,h3 br").replaceWith(" ");
    const heading = main.find("h1").text().trim();
    const title =
      $("title")
        .text()
        .replace(/ \| dEdge$/, "")
        .trim() || heading;
    assert(title, `Missing heading on ${route}`);
    main.find("form").each((_, el) => {
      const action = new URL($(el).attr("action"), canonical).href;
      $(el).replaceWith(
        $("<p>").text(
          `Analyze a public Solana wallet: submit a GET request to ${action} with the address query parameter. Use a 32–44 character base58 address, with surrounding whitespace removed. Do not provide private keys or seed phrases.`,
        ),
      );
    });
    main
      .find(
        "script,style,svg,[aria-hidden=true],.toc,.guide-art,.feature-number",
      )
      .remove();
    main.find("a[href],img[src]").each((_, el) => {
      const attribute = el.tagName === "a" ? "href" : "src";
      $(el).attr(attribute, new URL($(el).attr(attribute), canonical).href);
    });
    // The imported comparison tables use their first row as column labels.
    main.find("table").each((_, table) => {
      const row = $(table).find("tr").first();
      row.children("td").each((_, cell) => {
        cell.tagName = "th";
      });
      if (!$(table).children("thead").length)
        $(table).prepend($("<thead>").append(row));
      $(table).find("colgroup").remove();
    });
    // CSS separates these inline UI labels visually; make the separation textual too.
    main.find("span,strong,small").prepend(" ").append(" ");
    main.find("h1").remove();
    const body = converter.turndown(main.html());
    const markdown = `# ${heading}\n\nSource: ${canonical}\n\n${body}\n\n---\n\n[Agent content index](${site.origin}/llms.txt)\n`;
    const file = path.join("out", route, "index.md");
    fs.writeFileSync(file, markdown);
    return { route, title, markdown, url: canonical + "index.md" };
  });
const label = (text) => text.replace(/[\[\]\\]/g, "\\$&");
const link = (page, note) =>
  `- [${label(page.title)}](${page.url})${note ? ": " + note : ""}`;
const lines = [
  "# dEdge",
  "",
  "> Solana wallet research and education. The free web app provides public wallet summaries; Telegram offers deeper analysis, discovery and tracking.",
  "",
  "This index covers the dEdge marketing site and all 18 Academy guides. Each Markdown page is generated from the same exported HTML that visitors read. Follow the Source URL for the canonical human-readable page. Image links and alt text are preserved; text inside screenshots is not transcribed.",
  "",
  "Reports describe historical activity, not future returns. Product previews are illustrative. dEdge provides research; separate third-party tools execute trades. Academy guides preserve historical educational material, so screenshots and third-party interfaces may have changed. Use the maintained pricing and developer pages for current entitlements and API behavior.",
  "",
  "## Website",
  "",
  ...pages
    .filter((p) => !articles.some((a) => a.path === p.route))
    .map((p) => link(p)),
];
for (const category of [
  "Solana fundamentals",
  "Wallet research",
  "Copy trading",
]) {
  lines.push("", `## Academy: ${category}`, "");
  for (const article of articles.filter((a) => a.category === category)) {
    lines.push(
      link(
        pages.find((p) => p.route === article.path),
        `${article.minutes} minute guide. Published ${article.date}.`,
      ),
    );
  }
}
lines.push(
  "",
  "## App and developer resources",
  "",
  `- [Free wallet research app](${site.app}): Read public wallet reports without an account or wallet connection.`,
  `- [Wallet leaderboard](${site.wallets}): Discover wallets to research.`,
  `- [Trending tokens](${site.trending}): Token discovery in the app.`,
  `- [Developer documentation](${site.developers}): Maintained API access and integration details.`,
  `- [OpenAPI schema](${site.app}openapi.json): Machine-readable API contract.`,
  `- [Read-only MCP setup](${site.developers}#mcp): Agent integration instructions.`,
  `- [App agent index](${site.app}llms.txt): The app's own agent resources.`,
  `- [Current pricing](${site.pricing}): Current limits and subscriptions.`,
  `- [Telegram bot](${site.telegram}): Deeper research, discovery and tracking.`,
  `- [Contact](${site.contact})`,
  `- [Privacy](${site.privacy})`,
  "",
  "## Optional",
  "",
  `- [Complete website text](${site.origin}/llms-full.txt): All ${pages.length} public pages concatenated; larger than the individual guides.`,
  `- [Sitemap](${site.origin}/sitemap.xml): Canonical HTML page inventory.`,
  "",
);
fs.writeFileSync("out/llms.txt", lines.join("\n"));
fs.writeFileSync(
  "out/llms-full.txt",
  "# dEdge — complete website text\n\nGenerated from the exported public pages. Image-only details are not transcribed.\n\n" +
    pages.map((p) => p.markdown).join("\n\n---\n\n"),
);
console.log(
  `Generated llms.txt, llms-full.txt and ${pages.length} Markdown pages.`,
);
