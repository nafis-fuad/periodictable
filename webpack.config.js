// need to use require, or else throws errors
const path = require ('path');
const dotenv = require ('dotenv');

dotenv.config ({path: '.env'});

module.exports = {
  entry: './src/public/js/index.ts',
  devtool: 'inline-source-map',
  watch: true,
  mode: process.env.MODE,
  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.join (__dirname, './dist/public/js'),
  },
};
