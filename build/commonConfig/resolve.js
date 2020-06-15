const resolve = require('../utils/resolve')
const path = require('path')
const alias = require('./alias')

const env = process.env.NODE_ENV;

const resolveConfig = {
  extensions: ['.js', '.json', '.jsx', '.ts'],
  alias: alias[env]
}

module.exports = resolveConfig
