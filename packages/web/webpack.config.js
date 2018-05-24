const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};