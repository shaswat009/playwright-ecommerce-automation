export default class HomePage {
  constructor(page) {
    this.page = page;

    // AutomationExercise specific locator
    this.productsLink = page.locator('a[href="/products"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async goToProducts() {
    await this.productsLink.waitFor({ state: 'visible', timeout: 5000 });
    await this.productsLink.click();
  }
}