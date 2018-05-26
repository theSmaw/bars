const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'react',
      'styled-components'
    ]
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.(otf)$/,
      use: ['file-loader']
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      cache: true,
      template: './src/index.html',
      filename: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.css']
  }
};
