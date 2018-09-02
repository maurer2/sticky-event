const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    sticky: './src/sticky/index.js',
    intersection: './src/intersection/index.js',
  },
  output: {
    filename: '[name]/script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['*', '.js', '.ts', '.css'],
  },
  plugins: [
    // Sticky
    new HtmlWebpackPlugin({
      filename: 'sticky/index.html',
      chunks: ['sticky'],
      template: 'src/sticky/index.html',
      hash: true,
    }),
    // Intersection
    new HtmlWebpackPlugin({
      filename: 'intersection/index.html',
      chunks: ['intersection'],
      template: 'src/intersection/index.html',
      hash: true,
    }),
  ],
};
