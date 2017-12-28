const path = require("path");
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const vendors = ["react", "react-dom", "react-router"];

module.exports = {
    entry: {
        "lib": vendors
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/[name].js',
        library: '[name]',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity,
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, './[name]-manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: path.resolve(__dirname, './'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                drop_console: true,
                screw_ie8: true
            },
            output: {
                comments: false
            }
        }),
    ],
};