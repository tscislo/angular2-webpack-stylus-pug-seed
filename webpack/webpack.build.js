var webpack = require("webpack");
var WebpackConfig = require('webpack-config');
var common = require('./common');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = new WebpackConfig().extend(common.absPath('webpack.base.js')).merge({
    htmlLoader: {
        minimize: false // workaround for ng2
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false,
                compress: {
                    warnings: false
                }
            }
        ),
        new CleanWebpackPlugin(['bin'], {
            root: process.cwd(),
            verbose: true
        })
    ]
});
