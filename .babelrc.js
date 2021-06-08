const presets = [
  '@babel/preset-env',
  ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
];
const plugins = ['@emotion/babel-plugin'];

module.exports = { presets, plugins };
