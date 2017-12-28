let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
	entry: {
		app: [
			"react-hot-loader/patch",
			"webpack-dev-server/client?http://0.0.0.0:3030",
			"webpack/hot/only-dev-server",
			"babel-polyfill",
			"./src/index"
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: "/",
		filename: "[name].[hash].js"
	},
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, "dist"),
		port: 3030,
		host: "0.0.0.0",
		publicPath: "/",
		historyApiFallback: true,
		disableHostCheck: true
	},
	devtool: 'inline-source-map',
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
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
				presets: [
					["es2015", {
						"modules": false
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
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "less-loader"
			}]
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			use: [{
				loader: "file-loader",
				options: {
					name: "[hash].[ext]",
					hash: "sha512",
					digest: "hex",
					outputPath: "assets/images/"
				}
			}]
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [{
				loader: "url-loader",
				options: {
					limit: 10000,
					mimetype: "application/font-woff",
					outputPath: "assets/font/"
				}
			}]
		}, {
			test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [{
				loader: "file-loader",
				options: {
					outputPath: "assets/font/"
				}
			}]
		}]
	},
	plugins: [
		new OpenBrowserPlugin({
			url: 'http://localhost:3030/'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			hash: false,
			template: "./index.hbs"
		}),

	]
}