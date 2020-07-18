const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  }
}

//setup babel-done
//sass, css, babel loaders-done
//webpack-dev-SERVER-done
//html-webpack-plugin-done
