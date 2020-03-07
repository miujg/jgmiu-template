/**
 * webpack 公共模块 
 */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
        })
    ],
    module:{
        rules: [
            // 文件处理
            {
                test: /\.(jgp|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 这里的单位事byte 字节
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
                    'style-loader',
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
                            // 配置一些语言转换文件
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            // 一些特殊语法的配置 如： class 装饰器 生成器
                            plugins: []
                          }
                    }
                ]
            }
        ]
    }
}