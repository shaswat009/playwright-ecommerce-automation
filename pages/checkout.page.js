import { expect } from '@playwright/test';

export default class CheckoutPage {

  constructor(page) {

    this.page = page;

    this.checkoutBtn = page.locator('#checkout');

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');

    this.continueBtn = page.locator('#continue');

    this.finishBtn = page.locator('#finish');

    this.successMsg = page.locator('.complete-header');

  }

  async checkoutProduct() {

    await this.checkoutBtn.click();

  }

  async fillCheckoutDetails() {

    await this.firstName.fill('Test');
    await this.lastName.fill('User');
    await this.postalCode.fill('110001');

    await this.continueBtn.click();

  }

  async finishOrder() {

    await this.finishBtn.click();

  }

  async verifyOrderSuccess() {

    await expect(this.successMsg).toHaveText('Thank you for your order!');

  }

}