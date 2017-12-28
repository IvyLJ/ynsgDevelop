var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var bundleConfig = require("./bundle-config.json");
var publicPath = process.env.release_cdn || "/";

module.exports = {
    entry: {
        "ysg/app": "./src/index"
    },
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: publicPath,
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash:8].js"
    },
    devtool: "cheap-module-source-map",
    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './')
        ],
        alias: {
    			ysgreact: path.resolve('./src/components/index.js')
    		}
    },
    module: {
        rules: [{
                test: /\.js$/,
                // include: path.join(__dirname, "src"),
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        ["es2015", {
                            modules: false
                        }],
                        "stage-0",
                        "react"
                    ],
                    plugins: [
                        "transform-async-to-generator",
                        "transform-decorators-legacy", ["import", {
                            libraryName: "antd",
                            style: true
                        }]
                    ]
                }
            }, {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                }),
                // use: [
                //     {
                //         loader: "style-loader"
                //     },
                //     {
                //         loader: "css-loader"
                //     },
                //     {
                //         loader: "less-loader"
                //     }
                // ]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[hash].[ext]",
                        limit: 8192,
                        outputPath: "assets/images/"
                    }
                }]
            }, {
                test: /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[hash].[ext]",
                        outputPath: "assets/font/"
                    }
                }]
            },
            // {
            //     test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 outputPath: "assets/font/"
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: Infinity,
        // }),
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
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./lib-manifest.json'),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./common-manifest.json'),
        }),
        new ExtractTextPlugin("assets/styles.css"),
        new OptimizeCSSPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: "./index.hbs",
            libName: '/' + bundleConfig['lib'].js,
            commonName: '/' + bundleConfig['common'].js
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
