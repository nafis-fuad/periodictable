// need to use require, or else throws errors
const path = require ('path');
const dotenv = require ('dotenv');
const postcssPresetEnv = require ('postcss-preset-env');
const postcssNormalize = require ('postcss-normalize');

dotenv.config ({path: '.env'});

module.exports = {
  entry: './src/public/client/index.ts',
  devtool: 'inline-source-map',
  mode: process.env.MODE,
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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                postcssPresetEnv (/* options */),
                postcssNormalize (/* pluginOptions */),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.join (__dirname, './dist/public/client'),
  },
};
