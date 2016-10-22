var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');
var common = require('./common');

module.exports = {
    entry: {
        "app": "./src/app/app"
    },
    output: {
        path: 'bin',
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        alias: {
        }
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.pug|jade$/,
                loader: 'pug-html-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg|png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        failPlugin,
        new HtmlWebpackPlugin({
            title: 'My fist Angular 2 app',
            template: 'src/index.html',
            hash: true
        })
    ]
}
