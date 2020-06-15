const devServerConfig = {
  host: '0.0.0.0',
  port: 3001,
  headers: {
    'Access-Control-Allow-Origins': '*'
  },
  proxy: {
    // '/rest/lpqc': {
    //   target: 'http://x.com.cn',
    //   changeOrigin: true
    // }
  },
  overlay: {
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  open: true,
  useLocalIp: true
}

module.exports = devServerConfig
