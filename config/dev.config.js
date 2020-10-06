const webpack = require('webpack')
const baseConfig=require('./base.config')
const webpackMerge = require('webpack-merge')
const path = require('path')
const config = webpackMerge.merge(baseConfig,{
    mode:'development',
    module:{
        rules:[
            {
                test:/\.(css|sass)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude:path.join(__dirname,'../node_modules')
            }
        ]
    },
    //插件
    plugins:[
        new webpack.HotModuleReplacementPlugin()//热更新
    ],
    devServer:{
        contentBase:"../dist",
        port:9000,
        open:true,
        proxy:{
            "/ajax":{
                target:'https://m.maoyan.com',
                changeOrigin:true
            },
            '/mmdb':{
                target:'https://m.maoyan.com',
                changeOrigin:true
            }
        }
    }
})

module.exports = config