import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("home renders without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Bohdan");
  for (const id of ["about", "how", "stack", "work", "background", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  expect(errors).toEqual([]);
});

test("skip link moves focus to main", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard flow checked on desktop");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main#main")).toBeFocused();
});

test("mobile menu opens, closes with Escape and returns focus", async ({ page, isMobile }) => {
  test.skip(!isMobile, "menu is mobile-only");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open menu" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Menu" });
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("work explorer switches cases", async ({ page }) => {
  await page.goto("/#work");
  const second = page.getByRole("button", { name: /Recruiting boards/ });
  await second.click();
  await expect(second).toHaveAttribute("aria-expanded", "true");
});

test("reduced motion shows the end frame instead of the video", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("#hero-title")).toBeVisible();
  await expect(page.locator("video")).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="hero-title"] img')).toHaveAttribute("src", /hero-bg-end/);
  await context.close();
});

test("CV links only render when the PDF exists", async ({ page, request }) => {
  await page.goto("/");
  const cvLinks = page.locator('a[href="/cv.pdf"]');
  const res = await request.get("/cv.pdf");
  // header, mobile menu, Work CTA band, Work & study, contact
  if (res.ok()) await expect(cvLinks).toHaveCount(4);
  else await expect(cvLinks).toHaveCount(0);
});

test("no serious accessibility violations", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(1500); // let entrance animations finish
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
  expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(" | ")}`)).toEqual([]);
});

test("hero video plays once and holds the last frame", async ({ page, isMobile }) => {
  test.skip(isMobile, "same component on mobile");
  await page.goto("/");
  const video = page.locator('section[aria-labelledby="hero-title"] video');
  await expect(video).toHaveCount(1);
  await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.currentTime), { timeout: 5000 }).toBeGreaterThan(0.5);
  await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.ended), { timeout: 15000 }).toBe(true);
  await page.waitForTimeout(1000);
  const state = await video.evaluate((v: HTMLVideoElement) => ({ loop: v.loop, t: v.currentTime, d: v.duration, paused: v.paused }));
  expect(state.loop).toBe(false);
  expect(state.paused).toBe(true);
  expect(state.t).toBeGreaterThan(state.d - 0.2);
});
