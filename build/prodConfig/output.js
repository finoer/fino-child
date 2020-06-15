const resolve = require('../utils/resolve')
//const config = require('../../vf2e.config')

const outputConfig = {
  filename: '[name].js',
  path: resolve('output'),
 // publicPath: config.cdn.publicPath
}

module.exports = outputConfig
