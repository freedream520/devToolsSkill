var http=require("http");
var path=require("path");

//path 属于原生模块 转换路径关系   路径链接——相对>绝对——绝对>相对


// path.join 链接两个路径 中间会自动适配当前系统的分隔符 
// path.resolve 把当前路径转换成绝对路径  中途有./ ../  /  等开头的路径的时候的拼接结果
// path.relative  接受两个绝对路径   转换成第二个路径相对于第二个路径的相对路径  



http.createServer(function(req,res){
	
	var arr=[];
	var join=path.join(__dirname,"/test-path-join");
	arr.push(join);

	var resolve=path.resolve("test","a/b","c/d");
	arr.push(resolve);

	var resolve1=path.resolve("test","a/b","b/c","../d","m");
	arr.push(resolve1);

	var resolve2=path.resolve("test","a/b","b/c","../d","/m");
	arr.push(resolve2);


	var relative0=path.relative("/github","/work2");
	arr.push(relative0);

	var relative1=path.relative("/github","/github");//相同路径  返回空
	arr.push(relative1);

	var relative2=path.relative("/a/b","/c");//两个不存在的路径 并不去验证路径是否真实存在
	arr.push(relative2);

	for(var i=0;i<arr.length;i++){
		res.write(arr[i]);
		res.write("\n");
	}
	
	res.end("end");

}).listen("9000","127.0.0.1");