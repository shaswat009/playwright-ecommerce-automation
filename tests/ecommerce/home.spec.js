import { test, expect } from '@playwright/test';
import HomePage from '../../pages/home.page.js';

test('TC_ECOM_01 - Open home page & go to products', async ({ page }) => {
  const home = new HomePage(page);

  await home.open();
  await home.goToProducts();

  await expect(page).toHaveURL(/products/);
});