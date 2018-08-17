const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


let config
config = merge(baseConfig,{
  entry:{
    app:path.join(__dirname,'../src/client-entry.js')
  },
  output:{
    filename:'js/[name].[chunkhash:8].js',
    publicPath: 'http://ssfile.znswsse.com/product/mobile/',
    // publicPath: '/'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test:/\.(jpg|jpeg|png|svg|gif)/,
        use:{
          loader:'url-loader',
          options: {
            limit:1000,
            name:'img/[name]-[hash:4].[ext]',
            publicPath:'http://ssfile.znswsse.com/product/mobile/'
            // publicPath:'/'
          }
        }
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      chunkFilename: "css/[id].css"
    })
  ]
})


module.exports = config;
