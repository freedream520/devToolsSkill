//实现入口文件的可配置性 自动载入入口文件
//实现类似于gulp的打包方式 
//报错位置的提示

var webpack=require("webpack");
var path=require("path");
var glob = require('glob')


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
console.log(entries(JS_ENTRY_PATH));


module.exports={
	entry:entries(JS_ENTRY_PATH),
	output:{
		path:JS_OUT_PATH,
		filename:"[name].min.js",
		publicPath:"./src/",//公共文件存储位置 和下面的chunkFilename貌似没有关系  和图片的引用路径有关系
		// chunkFilename:"/chunk/[id].common.js?[chunkhash]"//非主文件的命名规则
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"!style!css"},
			{test:/\.scss$/,loader:"!style!css!scss"},
			{test: /\.json$/,loader: "json"},
			{
				test: /\.js$/,
				loader: "babel-loader",
			}
		]
	},
	resolve:{
		extensions:[".css",".scss",".js",".vue"],
		alias:{
			// "zepto":path.resolve(__dirname,"./src/js/plugins/zepto/zepto.min.js"),
			"swiper" : path.resolve(__dirname,"./src/js/plugins/swiper/swiper.min.js"),
			"flexible":path.resolve(__dirname,'./src/js/plugins/flexible/flexible.js'),
		}
	},
	plugins: [
    // new HtmlWebpackPlugin({template: __dirname + "/view/index.html"}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new webpack.optimize.DedupePlugin(),//插件去重
    // new ExtractTextPlugin("style.css"),
    // new webpack.optimize.CommonsChunkPlugin('common.js'),//公共模块的提取
  ],
}