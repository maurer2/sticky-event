const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    sticky: './src/sticky/index.js',
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
      // '@app': path.resolve(__dirname, 'src/'),
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['*', '.js', '.ts', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'sticky/index.html',
      chunks: ['sticky'],
      template: 'src/sticky/index.html',
      hash: true,
    }),
  ],
};
