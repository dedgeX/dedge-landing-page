import fs from "node:fs";
const articles = JSON.parse(fs.readFileSync("content/articles.json"));
const paths = [
  "/",
  "/blog/",
  "/dedge/academy/",
  "/meet-dEdge/",
  "/degen-Edge-Tool/",
  "/copytrading/",
  "/solana-wallet-analyzer/",
  ...articles.map((a) => a.path),
];
fs.writeFileSync(
  "public/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    paths
      .map((path) => `<url><loc>https://dedge.pro${path}</loc></url>`)
      .join("") +
    "</urlset>",
);
fs.writeFileSync(
  "public/robots.txt",
  "User-agent: *\nAllow: /\nSitemap: https://dedge.pro/sitemap.xml\n",
);
