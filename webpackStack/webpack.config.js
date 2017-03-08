//webpack是模块处理工具，最好不要像gulp一样去批处理压缩文件  可以结合使用
//实现入口文件的可配置性 自动载入入口文件
//实现类似于gulp的打包方式 
//报错位置的提示


/**样式编译
css兼容性自动处理 postcss-loader autoprefixer(是postcss-loader的插件)
webpack2需要配置为sass-loader  不能用scss-loader
webpack2不能使用postcss
需要用cnpm@4.2.0安装node－sass
**/


/**js编译
需要babel-loader babel-core babel-preset-es2015或者babel-preset-2016.....

**/

/**图片
html中引用的文件
css中引用的文件
**/

/**json文件


**/

/**字体文件

**/



/**
html－loader加载html文件作为模块
ejs-loader....等loader
**/




/**加快编译速度
	loaders需要添加exclude和include   会一定程度提升速度
	plugins js压缩和报错提示剔除 开发环境不要压缩，线上环境再压缩  会极大的提升速度
**/ 



/**既然适合做单页应用

如何实现首页轻量化呢
如何实现固定文件缓存呢
如何做到组件化呢
组件如何实现动态化内容呢

**/


var webpack=require("webpack");
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
		publicPath:"./src/",//公共文件存储位置 和下面的chunkFilename貌似没有关系  和图片的引用路径有关系
		// chunkFilename:"/chunk/[id].common.js?[chunkhash]"//非主文件的命名规则
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:["style-loader","css-loader"]
			},
			{
				test:/\.scss$/,
				loader:["style-loader","css-loader","sass-loader"]
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				include:"./src",
				exclude:"./node_modules/",
				query:{
					"presets":"es2015"
				}
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/,
				loader:"file-loader"
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
    // new HtmlWebpackPlugin({template: __dirname + "/view/index.html"}),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.optimize.DedupePlugin(),//插件去重
    // new ExtractTextPlugin("style.css"),
    // new webpack.optimize.CommonsChunkPlugin('common.js'),//公共模块的提取
  ],
}