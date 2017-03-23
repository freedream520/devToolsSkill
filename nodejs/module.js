var http=require("http");
var module_a=require("./test/module_a");
//var module_json=require("./test/module_json");

// require 引用的时候做了三件事情  
// 1.路径分析
//2.文件定位
// 3.编译执行

//会依次按照.js .json .node的顺序进行查找， 当文件名称是json或者node的时候  最好加上扩展名以提升性能
//.js文件  通过fs模块读取文件后进行编译
//.json文件 通过fs模块读取文件后  通过JSON.parse()解析返回结果


var server=http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset:utf-8"});

	res.write("start");
	console.log(module_a.a);
	module_a.a=321;

	require("./test/module_a");//一个模块被引入之后，如果修改了里面的属性值，再次引入的时候，会从缓存中获取
	res.write(module_a.a);
	console.log(module_a.a);

	
	// console.log(require.extensions);
	

	res.end("end");
});

server.listen(8000,"127.0.0.1");