/**
 * webpack 公共模块 
 */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpack = require('webpack'),
    Happypack = require('happypack'),
    buidConfig = require('./build-config')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // 设置publicpath 详细看：https://www.bilibili.com/video/av51693431?p=11
        // publicPath: 'http://127.0.0.1:8080/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            title: buidConfig.htmlTitle,
            // 导入dll文件
            scripts: buidConfig.createScripts(['_dll_react']),
        }),
        //  webpack相关插件
        new webpack.ProvidePlugin({
            // 全局变量引入
            // $: 'jquery'
        }),
        // dll 引用
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll', 'manifest.json')
        }),
        // copy dll 文件
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../dll'),
                to: './'
            }
        ]), 
        // 
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        // 多线程打包js, 如果要多线程打包css 要多实例化一个happypack
        new Happypack({
            id: 'js',
            use:  [{
                loader: 'babel-loader',
                // options: {
                //     // 配置一些语言转换文件， jsx
                //     presets: ['@babel/preset-env', '@babel/preset-react'],
                //     // 一些特殊语法的配置 如： class 装饰器 生成器 遇到的时候再行配置。
                //     plugins: ['@babel/plugin-proposal-class-properties']
                // }
            }]
        })
    ],
    module: {
        rules: [
            // 文件处理
            {
                test: /\.(jgp|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 这里的单位是byte 字节
                            limit: 20 * 1024,
                            // 输出到相应的目录
                            outputPath: 'img/',
                            // 图片可以单独加域名
                            // publicPath: '',
                        },
                    },
                ]
            },
            // js处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: 'happypack/loader?id=js'
            }
        ]
    },
    resolve: {
        // 关于第三方模块只会在此文件夹下面找，不会向上找
        modules: ['node_modules'],
        extensions: ['.js','.jsx'],
        // 别名
        alias: {
            images: path.join(process.cwd(), 'src/public/images'),
            com: path.join(process.cwd(),'src/component'),
            con: path.join(process.cwd(), 'src/containers'),
            action: path.join(process.cwd(), 'src/redux/action')
        }
    },
    // http://webpack.docschina.org/configuration/devtool/ 这里有一个表，总结得非常全面。
    // 1. source-map:  源码映射，会生成map文件，标识错误的列和行 。 大而全， 而且生成独立的额文件
    // 2. eval-source-map 不会产生单独的文件 将map文件集成到文件中。会表示错误的行和列。 对比source-map 是要小一些
    devtool: 'eval-source-map',
}