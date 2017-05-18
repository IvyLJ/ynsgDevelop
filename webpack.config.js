var webpack = require('webpack');
// var commonPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	//插件项
	//plugins: [CommonsChunkPlugin],
	//页面入口文件配置
	entry: {
		index: './src/index.js',
		//vendor: ['react']
	},
	//入口文件输出配置
	output: {
		path: './dev/',
		filename: '[name].js'
	},
	module: {
		//加载器配置
		loaders: [
			//.css文件使用style-loader和css-loader来处理
			// {
			// 	test: /\.css$/,
			// 	loader: 'style-loader!css-loader'
			// },
			//.js文件使用jsx-loader来处理
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel?presets[]=react' // react jsx编译，可以使用es6
			},
			//图片文件使用 url-loader 来处理，小于8kb的直接转为base64
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]

	},
	//其他解决方案配置
	resolve: {
		//查找module的话从这里开始查找
		root: '/Users/ivy/fxk/ynsg/src', //绝对路径
		//自动扩展文件后缀名，意味着require模块可以省略不写后缀名
		extensions: ['', '.js', '.json', '.scss', '.jsx'],
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias: {
			'react': "libs/react/react.js",
			'react-dom': "libs/react/react-dom.js",
			"react-router": "libs/react/react-router.js",
			"react-addons": "libs/react/react-with-addons.js",
			"jquery": "libs/jquery-1.11.3.min.js"
		}
	}
	// plugins: [
	// 	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		minimize: true,
	// 		compress: {
	// 			warnings: false,
	// 			drop_console: true
	// 		},
	// 		output: {
	// 			comments: false
	// 		}
	// 	})
	// ]
};