const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const resolve = require('../utils/resolve')

const commonPlugins = [
  new HTMLPlugin({
    template: resolve('build/template.html'),
    // minify: {
    //   minifyCSS: true,
    //   minifyJS: true
    // },
    chunksSortMode: 'none'
  })
]

module.exports = commonPlugins
