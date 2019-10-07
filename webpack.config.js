const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
  entry: {
      main: './src/main.js',
      home: './src/home.js',
      login: './src/login.js',
      styles: './src/styles/styles.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "styles/[name].css"}),
    new FixStyleOnlyEntriesPlugin(),
    new OptimizeCSSAssetsPlugin({})
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,"css-loader"]
        }
    ]
  }
}

module.exports = config;