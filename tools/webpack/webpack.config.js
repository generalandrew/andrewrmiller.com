const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: path.join(process.cwd(), 'app/dist'),
    hot: true
  },
  devtool: 'eval-source-map',
  entry: {
    'app': [
      'react-hot-loader/patch',
       'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
       'webpack/hot/only-dev-server',
      './app/src/index.js'
    ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(process.cwd(), 'app/src')
    }]
  },
  output: {
    filename: 'index.js',
    path: path.join(process.cwd(), 'app/dist'),
    publicPath: '/'
  },
  plugins: [
    // new CleanWebpackPlugin(
    //   ['dist/*.*'], // path(s) to clean
    //   {
    //     root: path.join(process.cwd(), 'app/') // clean options
    //   }
    // ),
    // new HtmlWebpackPlugin({
    //   title: 'Andrew R Miller',
    //   template: 'app/index.html'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}
