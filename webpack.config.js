const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
      main: './src/main.js',
      home: './src/home.js',
      login: './src/login.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      }
    ]
  }
}

module.exports = config;