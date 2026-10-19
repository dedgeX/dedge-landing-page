import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { load } from "cheerio";
const articles = JSON.parse(fs.readFileSync("content/articles.json"));
const routes = [
  "/",
  "/blog/",
  "/dedge/academy/",
  "/meet-dEdge/",
  "/degen-Edge-Tool/",
  "/copytrading/",
  "/solana-wallet-analyzer/",
  ...articles.map((a) => a.path),
];
const failures = [];
for (const route of [...routes, "/404/"]) {
  const file =
    route === "/404/" ? "out/404.html" : path.join("out", route, "index.html");
  assert(fs.existsSync(file), `Missing route ${route}`);
  const html = fs.readFileSync(file, "utf8"),
    $ = load(html);
  if ($("h1").length !== 1) failures.push(`${route}: expected one h1`);
  if ($("link[rel=canonical]").attr("href") !== "https://dedge.pro" + route)
    failures.push(`${route}: canonical`);
  if (!$("meta[name=description]").attr("content"))
    failures.push(`${route}: description`);
  if (/wp-content|elementor|clickup-attachments/.test(html))
    failures.push(`${route}: remote legacy dependency`);
  for (const el of $(
    "a[href],img[src],script[src],link[rel=stylesheet]",
  ).toArray()) {
    const value = $(el).attr(
      el.tagName === "a" ? "href" : el.tagName === "link" ? "href" : "src",
    );
    const url = new URL(value, "https://dedge.pro" + route);
    if (url.origin !== "https://dedge.pro") continue;
    const decoded = decodeURIComponent(url.pathname),
      target = path.join("out", decoded);
    if (
      !fs.existsSync(target) &&
      !fs.existsSync(path.join(target, "index.html"))
    )
      failures.push(`${route}: missing ${value}`);
    if (url.hash && el.tagName === "a") {
      const targetFile =
        fs.existsSync(target) && fs.statSync(target).isFile()
          ? target
          : path.join(target, "index.html");
      if (fs.existsSync(targetFile)) {
        const doc = load(fs.readFileSync(targetFile, "utf8"));
        if (
          !doc("[id]")
            .toArray()
            .some(
              (e) =>
                doc(e).attr("id") === decodeURIComponent(url.hash.slice(1)),
            )
        )
          failures.push(`${route}: missing anchor ${value}`);
      }
    }
  }
  for (const img of $("img").toArray())
    if (!$(img).attr("alt")) failures.push(`${route}: missing image alt`);
  for (const json of $('script[type="application/ld+json"]').toArray())
    JSON.parse($(json).html());
}
assert.equal(failures.length, 0, failures.join("\n"));
assert.equal(fs.readFileSync("out/CNAME", "utf8").trim(), "dedge.pro");
assert(fs.existsSync("out/.nojekyll"));
console.log(
  `Export verified: ${routes.length} public routes + 404, links, assets, anchors, canonicals and structured data.`,
);
