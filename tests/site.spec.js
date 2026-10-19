const { test, expect } = require("@playwright/test");
const articles = require("../content/articles.json");
const valid = "So11111111111111111111111111111111111111112";
test.beforeEach(async ({ page }) => {
  await page.route(/googletagmanager|google-analytics/, (r) => r.abort());
});
test("all existing and migrated routes load directly", async ({ page }) => {
  for (const route of [
    "/",
    "/blog/",
    "/dedge/academy/",
    "/meet-dEdge/",
    "/degen-Edge-Tool/",
    "/copytrading/",
    "/solana-wallet-analyzer/",
    ...articles.map((a) => a.path),
  ]) {
    const r = await page.goto(route);
    expect(r.status(), route).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page
        .locator("img")
        .evaluateAll(
          (imgs) =>
            imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
        ),
    ).toBe(0);
  }
});
for (const width of [375, 768, 1440])
  test(`responsive layout ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const [route, name] of [
      ["/", "home"],
      ["/dedge/academy/", "academy"],
      [articles[0].path, "article"],
    ]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      if (name === "home")
        await page.screenshot({ path: `artifacts/home-viewport-${width}.png` });
      await page.screenshot({
        path: `artifacts/${name}-${width}.png`,
        fullPage: true,
      });
    }
    await page.goto("/");
    await page.locator(".faq summary").first().click();
    await expect(page.locator(".faq details").first()).toHaveAttribute(
      "open",
      "",
    );
    if (width === 375) {
      await page.getByLabel("Toggle navigation").click();
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByText("Academy")
        .click();
      await expect(page).toHaveURL(/dedge\/academy/);
    }
  });
test("wallet validation, whitespace, keyboard and private analytics", async ({
  page,
}) => {
  await page.goto("/");
  const input = page.getByLabel("Start with a Solana wallet address");
  for (const invalid of [
    "",
    "invalid",
    "0".repeat(32),
    "1".repeat(31),
    "1".repeat(45),
  ]) {
    await input.fill(invalid);
    await page.getByRole("button", { name: "Analyze wallet" }).click();
    await expect(page).toHaveURL("http://127.0.0.1:3000/");
    await expect(page.locator("#wallet-error")).toContainText(
      "valid Solana address",
    );
  }
  let request;
  await page.route("https://app.dedge.pro/go?*", async (r) => {
    request = r.request().url();
    await r.fulfill({ body: "Report handoff" });
  });
  await input.fill("  " + valid + "  ");
  await expect(input).toHaveValue(valid);
  await input.press("Enter");
  await page.waitForURL("https://app.dedge.pro/go?*");
  expect(new URL(request).searchParams.get("address")).toBe(valid);
});
test("native form works without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/");
  const input = page.locator("#wallet");
  for (const invalid of ["", "bad", "0".repeat(32), "  " + valid + "  "]) {
    await input.fill(invalid);
    await input.press("Enter");
    expect(page.url()).toBe("http://127.0.0.1:3000/");
  }
  await page.route("https://app.dedge.pro/go?*", (r) =>
    r.fulfill({ body: "Success" }),
  );
  await input.fill(valid);
  await input.press("Enter");
  await page.waitForURL("https://app.dedge.pro/go?*");
  expect(new URL(page.url()).searchParams.get("address")).toBe(valid);
  await context.close();
});
test("analytics queue has one page view and no address properties", async ({
  page,
}) => {
  await page.goto("/?address=" + valid);
  await expect
    .poll(() => page.evaluate(() => typeof window.gtag))
    .toBe("function");
  let queue = await page.evaluate(() =>
    window.dataLayer.map((x) => Array.from(x)),
  );
  expect(
    queue.filter((x) => x[0] === "event" && x[1] === "page_view"),
  ).toHaveLength(1);
  expect(JSON.stringify(queue)).not.toContain(valid);
  await page.route("https://app.dedge.pro/**", (r) => r.abort());
  await page.locator("#wallet").fill(valid);
  await page.evaluate(() =>
    document
      .querySelector("form")
      .addEventListener("submit", (e) => e.preventDefault()),
  );
  await page.getByRole("button", { name: "Analyze wallet" }).click();
  queue = await page.evaluate(() => window.dataLayer.map((x) => Array.from(x)));
  expect(queue.filter((x) => x[1] === "wallet_submit")).toHaveLength(1);
  expect(JSON.stringify(queue)).not.toContain(valid);
  await page
    .locator('a[href="https://app.dedge.pro/"]')
    .first()
    .evaluate((a) => a.addEventListener("click", (e) => e.preventDefault()));
  await page.locator('a[href="https://app.dedge.pro/"]').first().click();
  queue = await page.evaluate(() => window.dataLayer.map((x) => Array.from(x)));
  expect(queue.filter((x) => x[1] === "outbound_app")).toHaveLength(1);
});
test("keyboard focus and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Skip to content")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  expect(
    await page
      .locator(".report")
      .evaluate((el) => getComputedStyle(el).transform),
  ).toBe("none");
});
const AxeBuilder = require("@axe-core/playwright").default;
test("accessible landmarks, names and contrast", async ({ page }) => {
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/dedge/academy/",
      articles[0].path,
      "/404.html",
    ]) {
      await page.goto(route);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      ).toEqual([]);
    }
  }
});

test("analytics exceptions do not block app navigation", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    window.gtag = () => {
      throw new Error("Analytics unavailable");
    };
  });
  await page.route("https://app.dedge.pro/", (r) =>
    r.fulfill({ body: "App opened" }),
  );
  await page.locator('a[href="https://app.dedge.pro/"]').first().click();
  await expect(page).toHaveURL("https://app.dedge.pro/");
});
