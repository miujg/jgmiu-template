const argv = process.argv,
    ismock = argv[argv.length - 1] === '--mock'

const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    path = require('path'),
    webpack = require('webpack')

module.exports = smart(base, {
    mode: 'development',
    devServer: {
        // 启用热更新
        hot: true,
        port: 8080,
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
    },
    plugins: [ 
        new webpack.NamedModulesPlugin(),
        // 热更新插件
        new webpack.HotModuleReplacementPlugin()
    ]
})