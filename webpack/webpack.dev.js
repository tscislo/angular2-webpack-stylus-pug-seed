var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./vendor.bundle.js"),
    new HtmlWebpackPlugin({
      title: 'My fist Angular 2 app',
      template: 'src/app/index.html'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3003,
      server: { baseDir: ['bin'] }
    })
  ]
}
