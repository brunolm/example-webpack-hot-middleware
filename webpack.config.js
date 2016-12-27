const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/',
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: '/static',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
  },
  module: {
    loaders: [{
      test: /\.tsx?$/, loaders: ['ts-loader'], exclude: /node_modules/
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
