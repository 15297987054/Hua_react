const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path=require('path')
const config = webpackMerge.merge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(css|sass)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                exclude:path.join(__dirname,'../node_modules')
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})

module.exports= config