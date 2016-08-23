var webpack = require("webpack");
var WebpackConfig = require('webpack-config');
var path = require('path');
var absPath = (x) => path.join(__dirname, x);

module.exports = new WebpackConfig().extend(absPath('webpack.base.js')).merge({});
