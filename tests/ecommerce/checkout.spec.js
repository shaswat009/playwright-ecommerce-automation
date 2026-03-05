import { test } from '@playwright/test';

import LoginPage from '../../pages/login.page.js';
import ProductsPage from '../../pages/products.page.js';
import CartPage from '../../pages/cart.page.js';
import CheckoutPage from '../../pages/checkout.page.js';

test('TC_ECOM_04 - Checkout product', async ({ page }) => {

  const login = new LoginPage(page);
  const product = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.open();

  await login.login('standard_user', 'secret_sauce');

  await product.addFirstProductToCart();

  await product.goToCart();

  await cart.verifyProductInCart();

  await checkout.checkoutProduct();

  await checkout.fillCheckoutDetails();

  await checkout.finishOrder();

  await checkout.verifyOrderSuccess();

});