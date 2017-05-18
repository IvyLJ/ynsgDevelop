var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlminify = require('gulp-htmlmin');
var less = require('gulp-less');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var babel = require('gulp-babel');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var rev = require('gulp-rev');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pump = require('pump');
//var eslint = require('gulp-eslint');

/**
 * 编译less文件
 */
gulp.task('less', function() {
	gulp.src('./src/**/**/**.less') //找到less文件
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['chrome >= 30', 'ff >= 30', 'safari >= 5', 'opera >= 30', 'edge >= 12', 'ie >= 7'],
			cascade: false
		}))

	.pipe(concat('index.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dev/'))
});
/**
 * 配置webpack实现模块化
 */
gulp.task("webpack-dev", function(callback) {
	var myDevConfig = Object.create(webpackConfig);
	//run webpack
	webpack(myDevConfig, function(err, stats) {
		if (err) throw new gutil.PluginError("webpack-dev", err);
		gutil.log("[webpack-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

/**
 * 压缩js
 */
// gulp.task('uglify-js', function() {
// 	gulp.src('./src/*.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./dev/'))
// });
// gulp.task('clean', function() {
// 	del('./dev/')
// });
/**
 * 构建md5文件（以json为例）
 */
// gulp.task("data", function() {
// 	gulp.src('./src/**/**/**.json')
// 		.pipe(rev())
// 		.pipe(gulp.dest('./dev/data'))
// });
/**
 * 输出json文件到data文件夹
 */
gulp.task("data", function() {
	gulp.src('./src/**/**/**.json')
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest('./dev/data'))
});
/**
 * 压缩图片并输出到images文件夹
 */
gulp.task("img", function() {
	gulp.src('./src/**/**/images/*.{jpg,jpeg,png,gif}')
		.pipe(imagemin())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest('./dev/images'))
});

/**
 * 压缩处理输出index页面替换引用
 */
gulp.task("htmlminify", function() {
	var options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: true, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	}
	gulp.src('./src/index.html')
		.pipe(htmlminify(options))
		.pipe(gulp.dest('./dev/'))
});

/**
 * 开发模式构建任务
 */
gulp.task('default', [
	'less', 'webpack-dev', 'htmlminify', 'data', 'img'
]);
gulp.task('watch', function() {
	gulp.watch(['./src/*.html', './src/*.js', './src/**/**/*.less', './src/**/**/*.jsx', './src/**/**/*.json'], function(event) {
		gulp.start('default');
	});
});
/**
 * 开发模式构建任务
 */
gulp.task('dev', [
	'watch', 'default'
]);