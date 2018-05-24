const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(otf)$/,
      use: ['file-loader']
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};