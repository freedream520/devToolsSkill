var http=require("http");
var fs=require("fs");
// cookie 为静态资源文件配置独立的域名 好处
// a:避免cookie的额外携带
// b:突破浏览器的并发下载数量 每一个域名的并发下载数量是固定的


var server=http.createServer(function(req,res){
	var arr=[];
	res.setHeader("set-Cookie",["aaa=111","bbb=222"]);//setHeader一定要放在writeheader之前

	var path="/filmImage/test.png";
	// console.log(req.url);
	if(req.url==path){
		var img=fs.readFileSync("./filmImage/不朽的时光.png","base64");
		var html="<img src=data:image/png;base64,"+img.toString()+" />";
		res.setHeader("Cash-Control","max-age="+24*60*60*1000);

		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
		res.end(html);
	}
	
	
});

server.listen(8000,"127.0.0.1");