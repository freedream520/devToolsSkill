var http = require("http");
var port = 8000;


http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/html;charset=utf-8"
	});
	

	var bufNum = new Buffer("123");
	var bufStr = new Buffer("abc");
	var bufZw = new Buffer("中文");

	//buf的长度 长度指的是占用的字节数
	res.write("'123'的length:"+bufNum.length + "<br/>");
	res.write("'abc'的length:"+bufStr.length + "<br/>");
	res.write("'中文'的length:"+bufZw.length + "<br/>"+"每个中文占用3个字节的长度<br/><br/>");



	//buffer是可读写的   字符串是不可写的  
	res.write(bufStr[1]+":bufStr[1] <br/> buffer的对应位置上存放了对应的2位长度的16进制数<br/>");

	bufNum[1]=bufStr[1];
	res.write(bufNum.toString()+"<br/>");
	
	var bufStrCopy=new Buffer(bufStr.length);
	bufStr.copy(bufStrCopy);
	res.write("复制一个buffer bufStr.copy(bufStrCopy):"+bufStrCopy.toString()+"<br/>");

	res.write(bufStrCopy);
	console.log(bufStrCopy);
	res.end("<br/><br/>end");
}).listen(port, "127.0.0.1");

console.log("server is running on port " + port);

