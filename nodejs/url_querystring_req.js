var http=require("http");
var url=require("url");
var querystring=require("querystring");

//url和querystring一般都是同时结合使用
// url.parse(req.url)解析出各个部分 
// querystring.parse()把对应字符串解析成json 如果一个字段出现多次  会解析成数组


// path:路径以及搜索字段
// pathname：只包含路径
// hash ：包含#以及字段
// href：




var server=http.createServer(function(req,res){
	var arr=[];
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	res.write("start");


	res.write("<h2>Object.keys(req):</h2>");
	Object.keys(req).forEach(function(item,index){
		var val;
		if(typeof req[item]=="string"){
			val=req[item];
		}
		else{
			val="";
		}
		res.write("<p><strong>req."+item+"：</strong>"+val+"</p>");
	});


	var _url="https://www.baidu.com/about/index.html?a=1&b=2&b=3#ccc"
	var _urlObj=url.parse(_url);
	res.write("<br/><h2>req.headers:</h2>");

	var headerObj=req.headers;
	Object.keys(headerObj).forEach(function(item,index){
		res.write("<p><strong>"+item+"</strong>:"+headerObj[item]+"</p>");
	});



	res.end("end");
});

server.listen(8000,"127.0.0.1");