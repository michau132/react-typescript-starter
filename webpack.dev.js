const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = (env) =>  {
  console.log(env)
  // console.log(envKeys)
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
      port: 3000,
      hot: true,
    },
    plugins: [
     
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

