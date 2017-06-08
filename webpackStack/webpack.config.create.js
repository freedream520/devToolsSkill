
/**
技巧：
1.不要使用抽离css的模块
2.把公有的js（zepto...） 和公有的css（base.scss）放到一个js vendor中,在页面中只需要引用一个公有文件即可做到公有js和css一起加载的效果
3.异步加载模版可以使用不同的模板loader加载 比如ejs模板 hbs模板  
4.只要被监听的文件引用了scss，不管被引用的scss的层级有多深，都会被编译，反之，没有被引用的scss发生改变是不会触发watch监听的

编译速度
1.resolve 下可以设置root配置，极大的缩减文件的检索范围，提高编译速度
2.babelloader会编译所有的js文件，哪怕不需要转换成es6，所以可以再loader中设置exclude  排除掉不需要编译的文件
https://segmentfault.com/a/1190000005770042


难点：
1.如何实现点击的时候加载私有模板
2.如何动态修改页面中的引用路径
3.实现可调试map
4.加载异步模板或者组件  
	--对于独立的可执行js 直接引用即可
	--对于引用了其他模板或者样式的js   需要用es6 export出来，因为es6是引用加载 会把文件的执行环境也加载进来 引用的时候 需要用default
5.postcss自动化处理样式兼容
6.sourcemap调试
7.为什么scss改变也会触发watch改变  只要文件引用到scss

**/

module.exports=function(_config){//_config {debug:boolen}
	var config=_config||{};
	var debug=config.debug;
	
	

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
	   // console.log(entryFiles);
	   var map = {};
	   for (var i = 0; i < entryFiles.length; i++) {
	      var filePath = entryFiles[i].substring(ENTRY_PATH.length,entryFiles[i].lastIndexOf("\."));
	      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf("\."));
	      map[filePath] = entryFiles[i];
	   }
	   // console.log(map);
	   return map;
	}

	var jsFiles=entries(JS_ENTRY_PATH);

	//publicPath如何保证在多页应用中页面层级发生改变的时候也可已正确引用
	// const publicPath= process.env.NODE_ENV != "production"?"./dist/":"http://121.196.201.74/dist/";
	console.log("debug:"+debug);
	const publicPath=debug?(path.resolve(__dirname,"./dist/")+"/").replace(/\\/g,"/"):"http://121.196.201.74:1000/";
	
	return {
		context: __dirname,
		devtool:debug?"cheap-module-source-map":false,
		entry:Object.assign(jsFiles,{
			"js/js-css-base":["flexible",'zepto',"commonCss"]
		}),
		output:{
			path:OUT_PATH,
			filename:"[name].min.js",
			publicPath:publicPath,
			chunkFilename:"/async/[name]-[id].common.js?[chunkhash]"//require.ensure指定的异步模块 name是ensure的第三个参数的名字 id是模块id
		},
		module:{
			rules:[
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
					use:["style-loader",
						{
							loader:"css-loader",
							options:{
								minimize:true
							}
						},
						"sass-loader",
						{
							loader:"postcss-loader",
							options:{
								browsers:["last 2 Chrome versions", "last 5 Firefox versions", "Safari >= 6", "ie > 8"]
							}
						}
					]
				},
				// {
				// 	test:/\.scss$/,//js中引用的css公共模块生成路径不对
				// 	use:ExtractTextPlugin.extract({
				// 		fallback: 'style-loader',
				// 		// use:["css-loader","sass-loader"],
				// 		use:[{loader:"css-loader"},{loader:"sass-loader"}],
				// 		publicPath:publicPath,//生成的公有样式表引用的图片或者字体文件路径
				// 	})
				// },
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
					// test:/\.(png|jpg|jpeg|gif)$/,
					test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
					use:function(pathObj){
						var resource=pathObj.resource;
						var dir;
						if(delimiter==";"){
							dir=resource.substring((__dirname+"\\src\\").length,resource.lastIndexOf("\\")).replace("\\","\/");
						}
						else{
							dir=resource.substring((__dirname+"/src/").length,resource.lastIndexOf("/"));
						}
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
				},
				{
					test:/\.tpl$/,
					use:{
						loader:"art-template-loader",
						options:{

						}
					}
				}
			]
		},
		resolve:{
			modules: [path.resolve(__dirname, './src'), 'node_modules'],//模块的查找顺序
			extensions:[".css",".scss",".js",".vue"],
			alias:{
				"zepto":path.resolve(__dirname,"./src/js/plugins/zepto/zepto.min.js"),
				"swiper" : path.resolve(__dirname,"./src/js/plugins/swiper/swiper.min.js"),
				"flexible":path.resolve(__dirname,'./src/js/plugins/flexible/flexible.js'),
				"commonCss":path.resolve(__dirname,'./src/js/plugins/commonCss.js'),
			}
		},
		devServer: {
	        // contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
	        colors: true,//在cmd终端中输出彩色日志
	        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	        inline: true,//设置为true，当源文件改变时会自动刷新页面
	        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
	        process: true,//显示合并代码进度
	    },
		plugins: [
			new webpack.LoaderOptionsPlugin({
				options:{
					postcss:function(){
						var precss=require("precss");
						var autoprefixer=require("autoprefixer");
						return [autoprefixer];
					}
				}
			}),
	     new WebPlugin({
	     	template: __dirname + "/src/views/index.html",
	     	filename:"../views/index.html",
	     	requires:["js/js-css-base","js/page/app"]
	     }),
	    new webpack.optimize.UglifyJsPlugin({
		    beautify: debug? true :false,// 最紧凑的输出
		    comments: debug? true :false,// 删除所有的注释
		    compress: {
		      warnings: false,// 在UglifyJs删除没有用到的代码时不输出警告  
		      drop_console: false,// 删除所有的 `console` 语句
		      collapse_vars: false,// 内嵌定义了但是只用到一次的变量
		      reduce_vars: false,// 提取出出现多次但是没有定义成变量去引用的静态值
		    }
	    }),
	    // new webpack.optimize.DedupePlugin(),//插件去重
	   // new ExtractTextPlugin({
	   //    filename:function(getpath){
	   //    	console.log("name:"+getpath("css/[name]"));
	   //    	var distPath=getpath("css/[name]").replace("js/page","");
	   //    	console.log(distPath);
	   //    	return distPath+"-common.css";
	   //    },
	   //    // allChunks: true
	   // }),
	    // new webpack.optimize.CommonsChunkPlugin({
	    //   name: 'commons',
	    //   filename: 'commons.js',
	    //   minChunks: 2,
	    // }),
		
		
	  ],
	}
}

