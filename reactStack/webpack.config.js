var webpack=require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');//内置了js压缩 css 就是分离等功能  css和js都会被压缩掉
var path=require("path");


module.exports={
	entry:{
		"app":"./src/main.js",
	},
	output:{
		path:path.resolve(__dirname,"./dist/js/"),
		filename:"[name].min.js",
		publicPath:path.resolve(__dirname,"./dist/js/"),//公共文件存储位置 和下面的chunkFilename貌似没有关系  和图片的引用路径有关系
		chunkFilename:"./chunk/[name]-[id].common.js?[chunkhash]"//非主文件的命名规则
	},
	module:{
		rules:[
			{test:/\.css$/,loader:["style-loader","css-loader?modules"]},
			{test:/\.scss$/,loader:["style-loader","css-loader?modules","sass-loader?modules"]},
			{test: /\.json$/,loader: "json-loader"},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
		          	presets: ['react', 'es2015']//babel-plugin-transform-es2015-function-name
		        }
			},
			{
				test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
	            loader: "url-loader?name=image/[name].[ext]"
			}
		]
	},
	resolve:{
		extensions:[".css",".scss",".js",".vue"],
		alias:{
			"components":path.resolve(__dirname,"./src/components/"),
			"page":path.resolve(__dirname,"./src/page/"),
			"vue" : path.resolve(__dirname,'./node_modules/vue/dist/vue'),
			"flexible":path.resolve(__dirname,'./src/assets/js/plugins/flexible/flexible'),
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