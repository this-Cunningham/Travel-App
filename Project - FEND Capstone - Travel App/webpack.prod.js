const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html'
    }),
    new MiniCssExtractPlugin({filename: '[name].css'})
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    libraryTarget: 'var',
    library: 'Client'
    }
  },
  optimization: { //allows us to run minifying actions on certain file
      minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})], //initializing them here
  }
}

//setup babel-done
//sass, css, babel loaders-done
//webpack-dev-SERVER-done
//html-webpack-plugin-done
