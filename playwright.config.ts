import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure',
  },
  outputDir: '.playwright-mcp',
  testDir: '.playwright-mcp',
});
