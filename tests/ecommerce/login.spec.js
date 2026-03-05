import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/login.page.js';

test('TC_ECOM_01 - Login to application', async ({ page }) => {

  const login = new LoginPage(page);

  await login.open();

  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

});