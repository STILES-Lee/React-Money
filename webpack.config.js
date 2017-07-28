var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './components/main.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
    entry: [
        APP_PATH
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }, {
            test: /\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
    }
}