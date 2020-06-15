const commonRules = require('../commonRules')

const devRules = [
	{
    test: /\.(jpg|png|jpeg|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: '[name].[ext]'
    }
  },
  {
    test: /\.(mp3|mp4)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      name:'[name].[ext]',
      limit:10
    }
  }
]

const rulesConfig = [...commonRules, ...devRules]

module.exports = rulesConfig
