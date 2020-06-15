const webpack = require('webpack')
const commonPlugins = require('../commonPlugins')
const resolve = require('../utils/resolve')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
  	new CopyWebpackPlugin(

		{
			patterns: [
				{
					from: resolve('src/img'),
					to: resolve('dist'),
					globOptions:{
						ignore: ['.*']
					}
				}
			]

		}

	)
]

const pluginsConfig = [...commonPlugins, ...devPlugins]

module.exports = pluginsConfig
