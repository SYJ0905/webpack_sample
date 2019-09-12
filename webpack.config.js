const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/main.js',
    './src/assets/all.scss', // scss 進入點
  ],
  output: {
    filename: 'js/main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map', // 必須要有
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      meta: {
        'Content-Security-Policy': { 'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge' },
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      }
    }),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, 'dist'),
      filename: 'css/all.css',
    }),
  ],
};