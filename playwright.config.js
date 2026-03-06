import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const env = process.env.ENV || 'qa';
dotenv.config({ path: `env/${env}.env` });

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  fullyParallel: true,

  workers: 4,

  retries: 1,

  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }

  ]

});