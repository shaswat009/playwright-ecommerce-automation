import { expect } from '@playwright/test';

export default class ProductsPage {

  constructor(page) {

    this.page = page;

    this.firstProductAddBtn = page.locator('.inventory_item button').first();

    this.cartIcon = page.locator('.shopping_cart_link');

  }

  async addFirstProductToCart() {

    await this.firstProductAddBtn.click();

  }

  async goToCart() {

    await this.cartIcon.click();

  }

}