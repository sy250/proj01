const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
//   entry: APP_PATH,
  entry: {
    "deploy-kintone-subtable" : "./src/deploySubtable.ts"
  },

  output: {
    // filename: 'bundle.js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [
    // new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};

/*
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    "kintone-typescript-sample" : "./src/kintone-typescript-sample.ts"
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
};
*/