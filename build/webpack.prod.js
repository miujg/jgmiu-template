
const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin') // 用于css分离

module.exports = smart(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        // css分离
        new MiniCssExtractPlugin({
            // 输出到特定目录下 
            filename: 'css/index.css',
        }),
    ],
    module: {
        rules: [
            // css处理
            {
                test: /\.scss$/,
                use:  [
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
        ]
    }
})