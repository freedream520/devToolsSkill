//webpack是模块处理工具，最好不要像gulp一样去批处理压缩文件  可以结合使用
//publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换 
//include 是包含的文件使用指定的loader编译，否则不编译，但是还是会打包的
//webpack.optimize.CommonsChunkPlugin会提取公共模块，生成一个单独文件，虽然会多一个请求，但是会缓存在浏览器中

// vendor: ['zepto', 'flexible'],在entry中进行手工配置公共模块的打包 打包文件是一个数组，有id的索引，根据命令行打包信息可以知道都有哪些模块被打包进去了
//webpack2的use可以是字符串，数组，对象 ，函数 大大的提升了可配置性

/** 难点在于图片  单页  多页   单页和多页面混合 开发环境和线上环境的正确配置 **/
// npm包的具体使用细则可以去官网查看api  不要胡乱猜测
//src目录下的图片 js css  和dist中的一致，这样引用的时候不会搞混

/**     css scss样式编译
css兼容性自动处理 postcss-loader autoprefixer(是postcss-loader的插件)
webpack2需要配置为sass-loader  不能用scss-loader
webpack2不能使用postcss
需要用cnpm@4.2.0安装node－sass
配置css-loader?minimize  实现样式压缩

css公有模块抽离
使用 extract-text-webpack-plugin  自己没有提取成功过
**/


/**     js编译
需要babel-loader babel-core babel-preset-es2015或者babel-preset-2016.....

	公有模块分离
1.通过入口文件的vendor 实现自定义
2.通过webpack.optimize.CommonsChunkPlugin 自动实现公有模块打包 只需要在pligins中设置即可

*/


/**     图片 url-loader和file-loader的区别
html中引用的文件
css中引用的文件
js中的图片

图片大小超出url-loader中的limit的时候，会报错
url-loader超出尺寸的图片的存放路径问题？
output.path+imageName

**/


/**       json文件


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
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var path=require("path");
var glob = require('glob')
var autoprefixer=require("autoprefixer");

const delimiter=path.delimiter;//;window系统 :liunx系统

//入口
const ENTRY_PATH="./src/";
const JS_ENTRY_PATH="./src/js/page/";

//出口
const OUT_PATH=path.resolve(__dirname,"./dist/");


var entries= function (root) {
   var entryFiles = glob.sync(root + '**/*.{js,jsx}');//获取某个路径下的所有文件名称及对应的文件路径
   console.log(entryFiles);
   var map = {};
   for (var i = 0; i < entryFiles.length; i++) {
      var filePath = entryFiles[i].substring(ENTRY_PATH.length,entryFiles[i].lastIndexOf("\."));
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf("\."));
      map[filePath] = entryFiles[i];
   }
   console.log(map);
   return map;
}

var jsFiles=entries(JS_ENTRY_PATH);

const publicPath= process.env.NODE_ENV != "production"?"./dist/":"http://192.168.1.144:8010/dist/";


module.exports={
	context: __dirname,
	entry:Object.assign(jsFiles,{
		"js/vendor":['zepto',"flexible"]
	}),
	output:{
		path:OUT_PATH,
		filename:"[name].min.js",
		publicPath:publicPath,
		chunkFilename:"/chunk/[id].common.js?[chunkhash]"//非主文件的命名规则
	},
	module:{
		rules:[
			// {
			// 	test:/\.css$/,
			// 	use:["style-loader","css-loader?minimize"]
			// },
			{
				test:/\.css$/,
				use:["style-loader",{
					loader:"css-loader",
					options:{
						minimize:true
					}
				}]
			},
			{
				test:/\.scss$/,//js中引用的css公共模块生成路径不对
				use:ExtractTextPlugin.extract({
					fallback: 'style-loader',
					// use:["css-loader","sass-loader"],
					use:[{loader:"css-loader"},{loader:"sass-loader"}]
					// publicPath:"./dist/css/"
				})
			},
			{
				test: /\.js$/,
				use:{
					loader:"babel-loader",
					options:{
						presets:["es2015"],
						cacheDirectory:true
					}
				},
				include:"./src",//只对项目目录下src目录里的代码进行babel编译
				exclude:["./node_modules/"],
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/,
				use:function(pathObj){
					var resource=pathObj.resource;
					var dir;
					if(delimiter==";"){
						dir=resource.substring((__dirname+"\\src\\").length,resource.lastIndexOf("\\")).replace("\\","\/");
					}
					else{
						dir=resource.substring((__dirname+"/src/").length,resource.lastIndexOf("/"));
					}
					// "image-webpack?bypassOnDebug&optimizationLevel=9&interlaced=false"
					return {
						loader:["url-loader"],
						options:{
							limit:1000,
							name:dir+"/[name].[ext]"
						}
					}
				},
			},
			{
				test:/\.html$/,
				use:"html-loader"
			},
			{
				test:/\.ejs$/,
				use:["ejs-loader"]
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
     // new WebPlugin({
     // 	template: __dirname + "/template.html",
     // 	filename:"../../../index0.html",
     // 	requires:Object.keys(jsFiles)
     // }),
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
   new ExtractTextPlugin({
      filename:function(getpath){
      	var distPath=getpath("css/[name]").replace("js/page","common");
      	console.log(distPath);
      	return distPath+"-common.css";
      },
      allChunks: true
   }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js',
    //   minChunks: 2,
    // })
  ],
}
