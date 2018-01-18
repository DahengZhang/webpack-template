const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.config.js')

module.exports = merge(common, {
   entry: {
      app: ['./src/app.js']
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        minimize: true // css压缩
                     }
                  },
                  'postcss-loader'
               ]
            })
         },
         {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        minimize: true // css压缩
                     }
                  },
                  'postcss-loader',
                  'sass-loader'
               ]
            })
         }
      ]
   },
   plugins: [
      new UglifyJSPlugin(), // 移除上下文中的未引用代码
      new ExtractTextPlugin('css/[name].bundle.[hash:6].css')
   ]
})
