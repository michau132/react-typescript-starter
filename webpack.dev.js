const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = env =>  {
  console.log(env.NODE_ENV)
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
      port: 3000,
      hot: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'proccess.NODE_ENV': JSON.stringify(env.NODE_ENV)
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

