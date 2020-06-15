const path = require('path')

module.exports = {
  development: {
    'Packs': path.resolve('../../packages')
  },
  production: {
    'Packs': '@finoer'
  }
}
