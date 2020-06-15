const commonRules = require('../commonRules')
//const config = require('../../vf2e.config')
const prodRules = [
  {
    test: /\.(jpg|png|jpeg|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: '[name].[hash:8].[ext]',
         // publicPath: config.cdn.publicPath
        }
      }
    ]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: '[name].[hash:8].[ext]',
     // publicPath: config.cdn.publicPath
    }
  },
  {
    test: /\.(mp3|mp4)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      name:'[name].[hash:8].[ext]',
      limit:1000,
      //publicPath: config.cdn.publicPath
    }
  }
]

const rulesConfig = [...commonRules, ...prodRules]

module.exports = rulesConfig
