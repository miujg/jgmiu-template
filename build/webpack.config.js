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
            }
        ]
    }
}