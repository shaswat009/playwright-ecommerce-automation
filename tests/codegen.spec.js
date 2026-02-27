import { test, expect } from '@playwright/test';

test('Verify Example.com Title', async ({ page }) => {
  
  // Step 1: Navigate to website
  await page.goto('https://example.com/');

  // Step 2: Validate page title
  await expect(page).toHaveTitle(/Example Domain/);

  // Step 3: Validate heading is visible
  await expect(page.locator('h1')).toHaveText('Example Domain');

});