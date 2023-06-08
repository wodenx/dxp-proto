import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const baseUrl: string = 'http://localhost:9000/';
const timeout: number = 5 * 60 * 1000;

const configurators = {
  "smoke": (baseConfig: PlaywrightTestConfig) => {
    baseConfig.testDir = './tests/smoke';
    baseConfig.use = {
      baseURL: baseUrl,
      trace: 'on-first-retry',
      testIdAttribute: 'id',
    };
    baseConfig.webServer = {
      command: 'npm run serve',
      url: baseUrl,
      ignoreHTTPSErrors: true,
      reuseExistingServer: true,
      timeout: timeout,
    };
  },
  "configuration": (baseConfig: PlaywrightTestConfig) => {
    baseConfig.testDir = './tests/configuration';
    baseConfig.use = {
      trace: 'on-first-retry',
    };
    baseConfig.globalSetup = require.resolve('./tests/configuration/setup');
    baseConfig.globalTeardown = require.resolve('./tests/configuration/teardown');
    }
}

const playwrightConfig: PlaywrightTestConfig = {
  timeout: timeout,

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 5,
  reporter: 'html',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

const suite: string = process.env.PLAYWRIGHT_SUITE as string;

if (!suite) {
  throw Error(`The PLAYWRIGHT_SUITE environment variable is not set`);
}

const configurator = configurators[suite]

if (!configurator) {
  throw Error(`Unknown playwright suite: ${suite}, use one of ${Object.keys(configurators)}`);
}

configurator(playwrightConfig)

export default defineConfig(playwrightConfig);
