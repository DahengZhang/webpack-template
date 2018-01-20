const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '',
    filename: 'js/[name].bundle.[hash:6].js',
    chunkFilename: 'js/[name].chunk.[hash:6].js'
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 动态生成 html 文件
      title: 'Webpack',
      template: './index.html',
      inject: true,
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true // 删除空白符与换行符
      }
    })
  ]
}
