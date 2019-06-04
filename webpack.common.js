
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true
        }
      },
      { 
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
      
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json')

    }),
  ]
};
