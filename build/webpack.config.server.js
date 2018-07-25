const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueServerPlugin = require('vue-server-renderer/server-plugin')



let config

const isDev = process.env.NODE_ENV === 'development'

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[chunkhash:8].css",
    chunkFilename: "css/[id].css"
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.VUE_ENV': '"server"'
  }),
  // new VueServerPlugin()
]


config = merge(baseConfig,{
  target:'node',
  entry:{
    app:path.join(__dirname,'../src/server-entry.js')
  },
  output:{
    libraryTarget:'commonjs2',
    filename:'server-entry.js',
    path:path.join(__dirname,'../server-build'),
    publicPath: '/',
  },
  externals:Object.keys(require('../package.json').dependencies),
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
  plugins
})


module.exports = config;
