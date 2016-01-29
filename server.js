const path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Webpack = require('webpack');
const WebpackPlugin = require('hapi-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

const server = new Hapi.Server();
server.connection({
  port: 3000,
  routes: {
    cors: true
  }
});


const compiler = new Webpack(webpackConfig);
const assets = {
  noInfo: true,
  publicPath: '/dist'
};
const hot = {};

const publicPath = path.join(__dirname, 'client/public/');
server.register(Inert, () => {});
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: publicPath
    }
  }
});

server.register({
    register: WebpackPlugin,
    options: {
      compiler, assets, hot
    }
  },
  error => {
    if (error) {
      return console.error(error);
    }
    server.start(() => console.log('Server running at:', server.info.uri));
  });
