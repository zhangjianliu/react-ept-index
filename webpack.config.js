const path = require('path');

module.exports = {

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
    }
};