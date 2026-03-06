import { test } from '@playwright/test';

import LoginPage from '../../pages/login.page.js';
import ProductsPage from '../../pages/products.page.js';
import CartPage from '../../pages/cart.page.js';

test('@regression TC_ECOM_03 - Verify product present in cart', async ({ page }) => {

  const login = new LoginPage(page);
  const product = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.open();

  await login.login('standard_user', 'secret_sauce');

  await product.addFirstProductToCart();

  await product.goToCart();

  await cart.verifyProductInCart();

});