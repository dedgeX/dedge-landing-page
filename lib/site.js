export const site = {
  origin: "https://dedge.pro",
  app: "https://app.dedge.pro/",
  analyze: "https://app.dedge.pro/go",
  wallets: "https://app.dedge.pro/wallets",
  trending: "https://app.dedge.pro/trending",
  telegram: "https://t.me/dEdge_solana_bot?start=website",
  developers: "https://app.dedge.pro/developers",
  pricing: "https://app.dedge.pro/pricing",
  contact: "https://app.dedge.pro/contact",
  privacy: "https://app.dedge.pro/privacy",
  academy: "/dedge/academy/",
};
export const navigation = [
  ["Product", "/#product"],
  ["Academy", site.academy],
  ["Developers", site.developers],
  ["Telegram", site.telegram],
];
export function track(name, properties = {}) {
  try {
    window.gtag?.("event", name, { ...properties, send_to: "G-KWDXQWGFJG" });
  } catch {}
}
