const { test, expect } = require("@playwright/test");
const fs = require("node:fs");
test.use({ ignoreHTTPSErrors: true });
test("live Google scripts emit one page view and private action events", async ({
  page,
}) => {
  test.skip(
    !process.env.LIVE_ANALYTICS,
    "Explicit external-script verification; regular CI stays offline.",
  );
  test.setTimeout(60000);
  const collected = [];

  await page.route(
    /(?:google-analytics\.com|analytics\.google\.com)\/g\/collect/,
    async (route) => {
      const request = route.request();
      const url = new URL(request.url());
      const body = request.postData() || "";
      const events = body
        ? body
            .split("\n")
            .map(
              (line) => new URLSearchParams(url.search.slice(1) + "&" + line),
            )
        : [url.searchParams];
      collected.push(...events.map((p) => Object.fromEntries(p)));
      await route.fulfill({ status: 204 });
    },
  );
  // Preserve non-GA destination code while preventing QA pixels from sending visits.
  await page.route(
    /clarity\.ms|ads-twitter\.com|analytics\.tiktok\.com|facebook\.com|facebook\.net|redditstatic\.com|reddit\.com|bat\.bing\.com|doubleclick\.net|googleadservices\.com/,
    (r) => r.abort(),
  );
  await page.route("**/ccm/**", (r) => r.abort());
  await page.route("**/ads/ga-audiences**", (r) => r.abort());
  await page.goto("/");
  await expect
    .poll(() => collected.filter((p) => p.en === "page_view").length, {
      timeout: 30000,
    })
    .toBe(1);
  await page.waitForFunction(
    () => window.google_tag_manager?.["GTM-T7DQB6MB"],
    { timeout: 30000 },
  );
  await page
    .locator("#wallet")
    .fill("So11111111111111111111111111111111111111112");
  await page.evaluate(() => {
    document
      .querySelector("form")
      .addEventListener("submit", (e) => e.preventDefault());
    document
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));
  });
  await page.getByRole("button", { name: "Analyze wallet" }).click();
  await page.locator('a[href="https://app.dedge.pro/"]').first().click();
  await page.locator(".desktop-nav a").filter({ hasText: "Telegram" }).click();
  await expect
    .poll(() => collected.filter((p) => p.en === "outbound_telegram").length, {
      timeout: 15000,
    })
    .toBe(1);
  await page.waitForTimeout(1500);
  for (const event of [
    "page_view",
    "wallet_submit",
    "outbound_app",
    "outbound_telegram",
  ])
    expect(
      collected.filter((p) => p.en === event),
      event,
    ).toHaveLength(1);
  expect(JSON.stringify(collected)).not.toContain(
    "So11111111111111111111111111111111111111112",
  );
  fs.writeFileSync(
    "artifacts/analytics-verification.json",
    JSON.stringify(
      {
        date: new Date().toISOString(),
        events: collected.map((p) => ({ name: p.en, destination: p.tid })),
        walletValuesAbsent: true,
        collectionIntercepted: true,
      },
      null,
      2,
    ),
  );
});
