const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const PATH = {
    app:path.join(__dirname,'../src/main.js'),
    build:path.join(__dirname,'../dist')
}

module.exports={
    //入口文件
    entry:{
        app:PATH.app
    },
    //出口文件
    output:{
        filename:"[hash:7].js",
        path:PATH.build
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./public/index.html',
            title:"React"
        }),
        //重新生成dist文件目录，清除之前打包过的文件
        new CleanWebpackPlugin()
    ],
    resolve:{
        //文件引入优先级
        extensions:['.js','.jsx','.json','.css'],
        //别名的配置
        alias:{}
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                loader:'babel-loader',
                exclude:path.join(__dirname,'../node_modules')
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:8*1024,
                        name:'img/[name].[hash:8].[ext]'
                    }
                },
                exclude:path.join(__dirname,'../node_modules')
            },
            {
                test:/\.(eot|svg|ttf|woff2|woff)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'iconfont/[name].[hash:8].[ext]'
                    }
                },
                exclude:path.join(__dirname,'../node_modules')
            }
        ]
    }
}