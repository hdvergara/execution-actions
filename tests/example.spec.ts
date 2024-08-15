import { test, expect } from '@playwright/test';

test('TES VPN', async ({ page }) => {
  await page.goto('https://staging.cpaas.ipcom.ai/');
  await expect(page.locator("#email")).toBeVisible();
 /* await page.locator("#email").fill("worktestautomation@gmail.com");
  await page.locator("#password").fill("Testing123456");*/
});

