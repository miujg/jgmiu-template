const path = require('path'),
    webpack = require('webpack'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin()
    ],
    // module:{
    //     rules: [{}]
    // }
}