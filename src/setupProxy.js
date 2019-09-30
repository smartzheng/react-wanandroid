const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api', {
    changeOrigin: true,
    target: 'https://www.wanandroid.com/',
    pathRewrite: {
      '^/api/': '/',
    },
  }))
}