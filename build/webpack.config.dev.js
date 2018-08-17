const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base.js')





let config
config = merge(baseConfig,{
  module:{
    rules:[
      {
        test:/\.css/,
        use:[
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test:/\.(jpg|jpeg|png|svg|gif)/,
        use:{
          loader:'url-loader',
          options: {
            limit:1000,
            name:'img/[name]-[hash:4].[ext]',
            // publicPath:'/',
          }
        }
      }
    ]
  },
  devServer:{
    port:'8000',
    host:'0.0.0.0',
    overlay:{
      errors:true
    },
    headers:{'Access-Control-Allow-Origin':'*'},
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
})


module.exports = config;
