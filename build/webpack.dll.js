const path =require('path'),
    webpack =require('webpack'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, '../dll'),
        // 接受导出结果的变量
        library: '_dll_[name]',
        libraryTarget: 'commonjs'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            // 与library对应
            name: '_dll_[name]',
            // 生成映射文件
            path: path.resolve(__dirname, '../dll', 'manifest.json')
        })
    ]
}