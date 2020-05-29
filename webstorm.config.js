const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-native': 'react-native-web',
      '@': path.resolve('src'),
      '@pages': path.resolve('src/pages'),
      '@api': path.resolve('src/api'),
      '@common': path.resolve('src/common'),
      '@utils': path.resolve('src/utils'),
      '@assets': path.resolve('src/assets'),
    }
  }
}
