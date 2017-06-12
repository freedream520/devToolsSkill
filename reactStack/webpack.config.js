//区分环境  通过package.json中的script set NODE_ENV=dev  && 执行对应的脚本即可
//多入口文件配置  通过glob插件进行文件收集
//热加载和本地服务  命令行执行 webpack-dev-server  即可自动识别config文件进行打包 --inline  --hot  --colors  --open --devtool
//api接口转发问题


var webpack=require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');//内置了js压缩 css 就是分离等功能  css和js都会被压缩掉
var path=require("path");


module.exports=function(){
	console.log("env:",process.env.NODE_ENV);
	let env=process.env.NODE_ENV;

	let commonConfig={
		entry:{
			"app":"./src/App.js",
			"about":"./src/About.js",
		},
		output:{
			path:path.resolve(__dirname,"./dist/js/"),
			filename:"[name].min.js",
			publicPath:"/dist/js/",//公共文件存储位置 和下面的chunkFilename貌似没有关系  和图片的引用路径有关系
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
			modules: [path.resolve(__dirname, './src'), 'node_modules'],//模块的查找顺序
			extensions:[".css",".scss",".js",".vue"],
			alias:{
				"components":path.resolve(__dirname,"./src/components/"),
				"page":path.resolve(__dirname,"./src/page/"),
				"actions":path.resolve(__dirname,"./actions/index.js"),
				"util":path.resolve(__dirname,"./src/util/"),
				"vue" : path.resolve(__dirname,'./node_modules/vue/dist/vue'),
				"flexible":path.resolve(__dirname,'./src/assets/js/plugins/flexible/flexible'),
			}
		}
	};

	let devConfig={
			devtool: 'source-map',
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
		    new webpack.DefinePlugin({
		      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		    })
		  ],
	}

	let prodConfig={

	};
	
	return Object.assign(commonConfig,env=="dev"?devConfig:prodConfig);

}

