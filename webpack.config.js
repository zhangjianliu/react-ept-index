const path = require('path');

module.exports = {
    // 模式
    mode: "development",
    /*入口*/
    entry: path.join(__dirname, './src/index.js'),

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
        rules:[
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    query: { //同时可以把babel配置写到根目录下的.babelrc中
                        presets: ['env', 'stage-0'] // env转换es6 stage-0转es7
                    }
                }
            }
        ]
    },
    // 开发服务器
    devServer: {
        contentBase: path.join(__dirname, './dist'),// 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        compress: true,// 启用gzip压缩
        inline: true,// 设置为true，当源文件改变时会自动刷新页面
        hot: false,// 模块热更新，取决于HotModuleReplacementPlugin
        host: '127.0.0.1',// 设置默认监听域名，如果省略，默认为“localhost”
        port: 3001// 设置默认监听端口，如果省略，默认为“8080”
    },
};