var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "vendor": "./src/app/vendor",
        "app": "./src/app/boot"
    },
    output: {
        path: 'bin',
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.pug|jade$/,
                loader: 'html!pug-html-loader'
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
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "./vendor.bundle.js"
        }),
        new HtmlWebpackPlugin({
            title: 'My fist Angular 2 app',
            template: 'src/index.html',
            hash: true
        })
    ]
}
