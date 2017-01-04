var webpack=require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');//内置了js压缩 css 就是分离等功能  css和js都会被压缩掉
var path=require("path");


module.exports={
	entry:{
		"app":"./src/main.js",
	},
	output:{
		path:"./dist/js/",
		filename:"[name].min.js",
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"!style!css"},
			{test:/\.scss$/,loader:"!style!css!scss"},
			{test: /\.json$/,loader: "json"},
			{test: /\.vue$/,loader: "vue-loader"},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
            loader: "url?name=image/[name].[ext]"
			}
		]
	},
	resolve:{
		extensions:["",".css",".scss",".js",".vue"],
		alias:{
			"components":path.resolve(__dirname,"./src/components/"),
			"vue" : path.resolve(__dirname,'./node_modules/vue/dist/vue'),
			"flexible":path.resolve(__dirname,'./public/js/plugins/flexible/flexible'),
		}
	},
	plugins: [
    // new HtmlWebpackPlugin({template: __dirname + "/view/index.html"}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),//插件去重
    new ExtractTextPlugin("style.css")
  ],
}