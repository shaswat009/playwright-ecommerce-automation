import { expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('button[type="submit"]');
    this.flash = page.locator('#flash');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    if (username) await this.username.fill(username);
    if (password) await this.password.fill(password);
    await this.loginBtn.click();
  }

  async verifyMessage(text) {
    await expect(this.flash).toContainText(text);
  }
}

export default LoginPage;