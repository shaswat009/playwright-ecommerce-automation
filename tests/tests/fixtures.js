import { test as base, expect } from '@playwright/test';
import LoginPage from '../../pages/login.page';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.navigate();
    await use(login);
  }
});

export { expect };