var webpack = require("webpack");
var WebpackConfig = require('webpack-config');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var common = require('./common');
var modRewrite = require('connect-modrewrite');

module.exports = new WebpackConfig().extend(common.absPath('webpack.base.js')).merge({
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3003,
            server: {
                baseDir: ['bin'],
                middleware: [
                    modRewrite([
                        '^[^\\.]*$ /index.html [L]'
                    ])
                ]
            }
        })
    ]

});
