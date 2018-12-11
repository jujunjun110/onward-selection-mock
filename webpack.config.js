const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    watchContentBase: true,
    open: true,
    quiet: false,
    noInfo: false
  },
  devtool: 'source-map'
}
