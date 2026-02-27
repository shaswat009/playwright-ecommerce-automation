import { test, expect } from './fixtures';
import loginTestData from '../../data/loginData';

/* ================================
   SMOKE TEST
================================ */

test('TC_LOGIN_Valid_Login @smoke', async ({ loginPage }) => {
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.verifyMessage('You logged into a secure area!');
});

/* ================================
   REGRESSION – DATA DRIVEN
================================ */

test.describe('Login Feature - Data Driven Tests @regression', () => {

  loginTestData.forEach((data) => {
    test(`TC_LOGIN - ${data.testName} @regression`, async ({ loginPage }) => {
      await loginPage.login(data.username, data.password);
      await loginPage.verifyMessage(data.expectedMessage);
    });
  });

});