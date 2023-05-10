/* eslint-disable global-require */
const requireEsm = require('esm')(module);
const glob = require('glob');

const { buildTailwindConfig } = requireEsm(
  '@bodiless/fclasses'
);

const content = glob.sync(
  './src/**/!(*.d).{ts,js,jsx,tsx}'
);

const twConfig = { content };

module.exports = buildTailwindConfig({
  twConfig,
  resolver: (pkgName) => require.resolve(pkgName),
  prefer: ['@kenvue/listerine'],
});
