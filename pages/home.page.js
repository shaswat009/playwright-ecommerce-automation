export default class HomePage {

  constructor(page) {
    this.page = page;

    this.productsLink = page.locator('a[href="/products"]');
  }

  async open() {

    await this.page.goto('/');

    await this.page.waitForLoadState('domcontentloaded');

    // Scroll to avoid ads overlay
    await this.page.evaluate(() => window.scrollBy(0, 500));

  }

  async goToProducts() {

    await this.productsLink.waitFor({ state: 'visible' });

    await this.productsLink.click({ force: true });

    await this.page.waitForURL('**/products');

  }

}