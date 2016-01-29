const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    'webpack-hot-middleware/client',
    // And then the actual application
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'client/public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'react-hmre']
        }
      }
    ]
  }
};
