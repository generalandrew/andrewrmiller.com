const express = require('express');
const path    = require('path');

const config = require('../config');

const app = express();

if (config.env === 'development') {
  const webpackConfig = require('../tools/webpack/webpack.config.js');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));
}

app.listen(3000, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('listening on port');
});
