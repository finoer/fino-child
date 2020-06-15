const resolve = require('../utils/resolve')

const commonRulesConfig = [
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/
  },
  {
    test: [ /\.vert$/, /\.frag$/ ],
    use: 'raw-loader'
  },
  {
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader'
    },
    exclude: file => (
      /node_modules/.test(file)
    ),
    include: [
      resolve('src')
    ]
  }
]

module.exports = commonRulesConfig

