const express = require('express')
const path    = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('../tools/webpack/webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(process.cwd(), 'app/dist/index.html'));
})


app.listen(3000, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('listening on port')
})
