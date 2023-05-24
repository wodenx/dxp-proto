const { join } = require('path');
const { configureKnapsack } = require('@knapsack/app');
const { KnapsackBodilessRenderer } = require('@bodiless/knapsack-renderer');
const { version } = require('../../package.json');
const { demoWrapperPath } = require('./common-config');
const webpackConfig = require('./webpack.config');

module.exports = configureKnapsack({
  dist: join(__dirname, 'lib'),
  public: join(__dirname, 'ks-public/'),
  data: './data',
  version,
  designTokens: {
    createCodeSnippet: (token) => `$${token.name}`,
    // srcFilePath: '/data/knapsack.design-tokens.json',
    distDir: '../../packages/listerine/assets',
    targets: {
      js: {
        enabled: true,
      },
    },
  },
  templateRenderers: [
    new KnapsackBodilessRenderer({
      demoWrapperPath,
      webpackConfig,
    }),
  ],
  plugins: [],
  cloud: {
    siteId: 'kenvue-listerine',
    repoName: 'dxp-proto',
    repoRoot: join(__dirname, '../../'),
    repoOwner: 'dxp-prototype',
    baseBranch: 'main',
  },
});
