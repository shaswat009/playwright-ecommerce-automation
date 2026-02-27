const loginTestData = [
  {
    testName: 'Valid Login',
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    expectedMessage: 'You logged into a secure area!'
  },
  {
    testName: 'Invalid Password',
    username: 'tomsmith',
    password: 'wrongpass',
    expectedMessage: 'Your password is invalid!'
  },
  {
    testName: 'Empty Password',
    username: 'tomsmith',
    password: '',
    expectedMessage: 'Your password is invalid!'
  },
  {
    testName: 'Empty Username',
    username: '',
    password: 'SuperSecretPassword!',
    expectedMessage: 'Your username is invalid!'
  }
];

export default loginTestData;