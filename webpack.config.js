const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.hundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}