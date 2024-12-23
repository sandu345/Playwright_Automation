import { test, expect } from "@playwright/test";

test("My First Test", async ({ page }) => {
  await page.goto("https://google.com/");
  // await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveTitle("Google");
});
