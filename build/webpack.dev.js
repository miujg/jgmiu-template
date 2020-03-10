const argv = process.argv,
    ismock = argv[argv.length - 1] === '--mock'

const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    path = require('path')

module.exports = smart(base, {
    mode: 'development',
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        // 数据mock
        
    }
})