
const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = smart(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
})