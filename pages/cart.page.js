import { expect } from '@playwright/test';

export default class CartPage {

  constructor(page) {

    this.page = page;

    this.cartItem = page.locator('.cart_item');
    this.removeBtn = page.locator('button:has-text("Remove")');
    this.cartBadge = page.locator('.shopping_cart_badge');

  }

  async verifyProductInCart() {

    await expect(this.cartItem).toBeVisible();

  }

  async removeProduct() {

    await this.removeBtn.click();

  }

  async verifyCartEmpty() {

    await expect(this.cartBadge).not.toBeVisible();

  }

}