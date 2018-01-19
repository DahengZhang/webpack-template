const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')

const hotMiddlewareScript = 'webpack-hot-middleware/client' // 后面接 ? 是给 webpack-hot-middleware 设置参数 reload=true 表示如果碰到不能hot reload的情况，就整页刷新

module.exports = merge(common, {
  entry: {
    app: ['babel-polyfill', './src/app.js', hotMiddlewareScript]
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 开启热更新
    new webpack.NoEmitOnErrorsPlugin(), // 跳过编译时出错的代码并记录，且会在编译结束后报错
  ]
})
