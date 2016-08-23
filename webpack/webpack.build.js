var webpack = require("webpack");
var WebpackConfig = require('webpack-config');
var common = require('./common');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = new WebpackConfig().extend(common.absPath('webpack.base.js')).merge({
    plugins : [
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        ),
        new CleanWebpackPlugin(['bin'], {
            root: process.cwd(),
            verbose: true
        })
    ]
});
