const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./public/index.js'],

  output: {
    path: path.join(__dirname, 'compiled'),
    publicPath: path.join(__dirname, 'public'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './compiled',
  },
};
