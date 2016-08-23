var webpack = require("webpack");
var WebpackConfig = require('webpack-config');
var common = require('./common');

module.exports = new WebpackConfig().extend(common.absPath('webpack.base.js')).merge({
    plugins : [
        new CleanWebpackPlugin(['bin'], {
            root: process.cwd(),
            verbose: true
        })
    ]
});
