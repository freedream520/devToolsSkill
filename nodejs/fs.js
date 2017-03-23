var http=require("http");
var fs=require("fs");
var port=8000;

//文件的编码的种类 ascii utf8 base64  读取文件的时候如果没有指定编码类型  读取的是buffer类型  需转换成str

//fs.readFileSync(filename,"utf-8")							同步读取文件内容
//fs.readFile(filename,"utf-8",callback（err,data）)		异步读取文件

//fs.writeFileSync(filename,str,"utf-8");   				同步写入文件
//fs.writeFile(filename,str,"utf-8");   					异步写入文件


//fs.readdir();												异步读取文件夹 读取文件夹下面的文件夹以及文件名称 不会读取更深一层路径
//fs.stat													传入一个文件名或者路径  判断当前处理的是文件夹还是文件

//fs.exists(filename,callback)								判断是否包含文件或者路径 callback里面传递exist参数 true：false
//fs.mkdir("dir")											只能创建路径  不能同时写入文件  如果存在路径  再次创建会报错
//fs.mkdirSync												同步创建路径
//fs.rmdir("dir")											只能删除路径  1.如果不存在该路径  删除会报错  2.该文件夹不为空 报错


//fs.watchFile												监听文件改变




http.createServer(function(req,res){
	res.writeHead(200,{
		"Content-Type":"text/html;charset=utf-8"
	});
	res.write("文件属性读写：<br/><br/>");


	res.write("<br/>文件内容读写：<br/><br/>");

	res.write("同步读取文件testJson.json  读取后赋值给变量 没有回调函数");
	var text=fs.readFileSync("test/testJson.json","utf-8");
	res.write(text.toString()+"<br/>");


	res.write("同步写入文件:");
	fs.writeFileSync("./test/writeFileSync.txt","新增内容","utf-8");
	var text1=fs.readFileSync("./test/writeFileSync.txt","utf-8");
	res.write(text1.toString()+"<br/><br/>");


	fs.exists("./path/",function(exist){
		if(exist){
			fs.rmdir("./path/");
		}
		else{
			fs.mkdir("./path/");
		}
	});

	var img=fs.readFileSync("./filmImage/回乡逗儿.png","base64");
	res.write("<br/>读取一张图片，并设置图片的src为base64数据");
	res.write("<img src=data:image/png;base64,"+img.toString()+" />");


	fs.readdir("./filmImage",function(error,files){
		res.write("<br/><br/>读取一个文件夹：fs.readdir<br/>");
		if(error){
			console.log(error);
		}
		else{
			files.forEach(function(filename,index){
				fs.stat("./filmImage/"+filename,function(err,stats){
					
					if(stats.mode==33206){//是文件
						res.write("<br/>文件："+filename);
					}
					else if(stats.mode==16822){
						res.write("<br/>文件夹："+filename);
					}
				});
				
			});
		}
		
	});


	fs.watchFile("./writeFileSync.txt",function(cur,prev){
		res.write("<br/><br/>fs.watchFile:<br/>cur.size:"+cur.size);
		res.write("<br/>prev.size:"+prev.size);
	});

	fs.writeFile("./test/writeFileSync.txt","changed",function(err){
		if(err){
			console.log(err);
		}
	});


	var input=fs.createReadStream("./test/txt.txt");
	readFile(input,callback);
	function callback(data){
		res.write("<br/>"+data);
	}
	function readFile(input,callback){
		input.on("data",function(data){
			res.write("<br/><br/>"+data.toString());
		});

		input.on("end",function(){
			console.log("end");
		});
	}


	var out=fs.createWriteStream("./test/createWriteStream.txt",{encoding:"utf8"});
	out.write("12313123");
	out.end("end");



}).listen(port,"127.0.0.1");