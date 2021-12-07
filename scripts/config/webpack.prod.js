const { merge } = require('webpack-merge')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common')
const { PROJECT_PATH } = require('../constant')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins:[
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
      whitelist: ['html', 'body']
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by react-ts-quick-starter (https://github.com/vortesnail/react-ts-quick-starter) */',
    }),
  ]
})
