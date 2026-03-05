import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

const env = process.env.ENV || 'qa';
dotenv.config({ path: `env/${env}.env` });

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [['html', { open: 'never' }]],
});