const path = require('path');

module.exports = {
  mode: 'production',
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
};
