const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api', {
    changeOrigin: true,
    target: 'http://test.uokohome.com:8888/'
  }))
}