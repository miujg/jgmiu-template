const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    path = require('path'),
    webpack = require('webpack'),
    buidConfig = require('./build-config')

buidConfig.scssRule.unshift('style-loader')

const ressult = smart(base, {
    mode: 'development',
    devServer: {
        // 启用热更新
        hot: true,
        port: buidConfig.devPort,
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: buidConfig.scssRule
            }
        ]
    },
    plugins: [ 
        new webpack.NamedModulesPlugin(),
        // 热更新插件
        new webpack.HotModuleReplacementPlugin()
    ]
})


module.exports = ressult