import { test } from '@playwright/test';
import LoginPage from '../../pages/login.page.js';
import ProductsPage from '../../pages/products.page.js';

test('TC_ECOM_02 - Add product to cart', async ({ page }) => {

  const login = new LoginPage(page);
  const product = new ProductsPage(page);

  await login.open();

  await login.login('standard_user', 'secret_sauce');

  await product.addFirstProductToCart();

});