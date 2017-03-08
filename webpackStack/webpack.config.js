//webpack是模块处理工具，最好不要像gulp一样去批处理压缩文件  可以结合使用
//实现入口文件的可配置性 自动载入入口文件
//实现类似于gulp的打包方式 
//报错位置的提示
//publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换
//include 是包含的文件使用指定的loader编译，否则不编译，但是还是会打包的
//webpack.optimize.CommonsChunkPlugin会提取公共模块，生成一个单独文件，虽然会多一个请求，但是会缓存在浏览器中
/** 难点在于图片  单页  多页   单页和多页面混合 开发环境和线上环境的正确配置 **/


/**     样式编译
css兼容性自动处理 postcss-loader autoprefixer(是postcss-loader的插件)
webpack2需要配置为sass-loader  不能用scss-loader
webpack2不能使用postcss
需要用cnpm@4.2.0安装node－sass

配置css-loader?minimize  实现样式压缩
**/


/**     js编译
需要babel-loader babel-core babel-preset-es2015或者babel-preset-2016.....

*/


/**     图片 url-loader和file-loader的区别
html中引用的文件
css中引用的文件
js中的图片

图片大小超出url-loader中的limit的时候，会报错
**/

/**j    son文件


**/



/**     字体文件

**/



/**    组件加载
html－loader加载html文件作为模块
ejs-loader....等loader
**/




/**    编译速度
	loaders需要添加exclude和include   会一定程度提升速度
	plugins js压缩和报错提示剔除 开发环境不要压缩，线上环境再压缩  会极大的提升速度
	配置babel缓存   babel-loader?cacheDirectory,
	alias设置别名 指定路径  缩短路径的搜索时间
**/ 



/**     疑虑
既然适合做单页应用

如何实现首页轻量化呢
如何实现固定文件缓存呢
如何做到组件化呢
组件如何实现动态化内容呢

**/


var webpack=require("webpack");
var webWebpackPlugin=require("web-webpack-plugin");
const { WebPlugin, AutoWebPlugin } = webWebpackPlugin;

var path=require("path");
var glob = require('glob')
var autoprefixer=require("autoprefixer");

//入口
const JS_ENTRY_PATH="./src/js/page/";
const CSS_ENTRY_PATH="./src/style/";
const IMAGE_ENTRY_PATH="./src/images/";

//出口
const JS_OUT_PATH="./public/js/page";
const CSS_OUT_PATH="./public/css/";



var entries= function (root) {
   var entryFiles = glob.sync(root + '**/*.{js,jsx}');//获取某个路径下的所有文件名称及对应的文件路径
   var map = {};
   for (var i = 0; i < entryFiles.length; i++) {
      var filePath = entryFiles[i].substring(root.length,entryFiles[i].lastIndexOf("\."));
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf("\."));
      map[filePath] = entryFiles[i];
   }
   return map;
}
const jsFiles=entries(JS_ENTRY_PATH);
const cssFiles=entries(CSS_ENTRY_PATH);


console.log(jsFiles);


module.exports={
	// context:__dirname,
	entry:jsFiles,
	output:{
		path:JS_OUT_PATH,
		filename:"[name].min.js",
		publicPath:"./public/",
		// chunkFilename:"/chunk/[id].common.js?[chunkhash]"//非主文件的命名规则
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:["style-loader","css-loader?minimize"]
			},
			{
				test:/\.scss$/,
				loader:["style-loader","css-loader?minimize","sass-loader"]
			},
			{
				test: /\.js$/,
				loader: "babel-loader?cacheDirectory",
				include:"./src",//只对项目目录下src目录里的代码进行babel编译
				exclude:"./node_modules/",
				query:{
					"presets":"es2015"
				}
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/,
				loader:"url-loader?limit=8100&name=images/[hash:8].[name].[ext]"
			},
			{
				test:/\.html$/,
				loaders:["html-loader"]
			},
			{
				test:/\.ejs$/,
				loaders:["ejs-loader"]
			}
		]
	},
	resolve:{
		extensions:[".css",".scss",".js",".vue"],
		alias:{
			"zepto":path.resolve(__dirname,"./src/js/plugins/zepto/zepto.min.js"),
			"swiper" : path.resolve(__dirname,"./src/js/plugins/swiper/swiper.min.js"),
			"flexible":path.resolve(__dirname,'./src/js/plugins/flexible/flexible.js'),
		}
	},
	plugins: [
     new WebPlugin({
     	template: __dirname + "/template.html",
     	filename:"index0.html",
     	requires:Object.keys(jsFiles)
     }),
    // new webpack.optimize.UglifyJsPlugin({
	   //  beautify: true,// 最紧凑的输出
	   //  comments: false,// 删除所有的注释
	   //  compress: {
	   //    warnings: false,// 在UglifyJs删除没有用到的代码时不输出警告  
	   //    drop_console: true,// 删除所有的 `console` 语句
	   //    collapse_vars: true,// 内嵌定义了但是只用到一次的变量
	   //    reduce_vars: true,// 提取出出现多次但是没有定义成变量去引用的静态值
	   //  }
    // }),
    // new webpack.optimize.DedupePlugin(),//插件去重
    // new ExtractTextPlugin("style.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    })
  ],
}