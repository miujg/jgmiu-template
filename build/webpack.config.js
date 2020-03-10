/**
 * webpack 公共模块 
 */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')
    MiniCssExtractPlugin = require('mini-css-extract-plugin'), // 用于css分离
    webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // 设置publicpath
        // publicPath: 'http://127.0.0.1:8080/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
        }),
        // css分离
        new MiniCssExtractPlugin(),
        //  webpack相关插件
        new webpack.ProvidePlugin({
            // 全局变量引入
            // $: 'jquery'
        }),
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
                            outputPath: 'img/'
                        },
                    },
                ]
            },
            // css处理
            {
                test: /\.scss$/,
                use: [
                    // css 分离
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:[
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 15 versions']
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            // js处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // 配置一些语言转换文件， jsx
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            // 一些特殊语法的配置 如： class 装饰器 生成器 遇到的时候再行配置。
                            plugins: []
                          }
                    }
                ]
            }
        ]
    },
    resolve: {
        // 关于第三方模块只会在此文件夹下面找，不会向上找
        modules: [path.resolve('node_modules')],
        extensions: ['.js','.jsx'],
        // 别名
        alias: {
            images: path.join(process.cwd(), 'src/public/images'),
            com: path.join(process.cwd(),'src/component'),
            con: path.join(process.cwd(), 'src/containers')
        }
    }
}