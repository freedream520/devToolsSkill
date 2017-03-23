var http=require("http");
var fs=require("fs");
var zLib=require("zlib");

//process是全局对象  在每一个模块内都可以访问到  提供当前node进程的相关信息

var server=http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	res.write("属性:");
	res.write("<h3>系统信息:</h3>");
	showMes(res,"argv");//命令行的参数  第一个参数为node  下面依次为传递的参数
	showMes(res,"env");
	showMes(res,"pid");//当前进程的id
	showMes(res,"platform");//当前系统的平台 
	showMes(res,"title");//默认值:node   可修改
	showMes(res,"version");//node的版本号


	res.write("<h3>系统IO:</h3>");
	showMes(res,"stdout");//process.stdout.write 相当于 console.log   stdout stdin 和其他进程通信，都是通过流的方式 所以必须通过pipe管道命令中介
	fs.createReadStream("./test/txt.txt").pipe(process.stdout);
	fs.createReadStream("./test/txt.txt").pipe(zLib.createGzip()).pipe(process.stdout);


	res.write("<h3>方法:</h3>");
	showMes(res,"cwd");
	console.log(process.cwd());//当前进程的执行文件的绝对路径 curent work dir 和__dirname的区别
	res.write("<br/>process.cwd():"+process.cwd());//cwd 是进程发起路径
	res.write("<br/>__dirname:"+__dirname);//指的是脚本路径

	showMes(res,"nextTick");
	process.nextTick(function(){//把任务放置到当前一轮事件循环的尾部
		console.log("nextTick");
	});
	setTimeout(function(){},0);//将当前任务放到下一轮事件循环的头部
	// 因此在执行setTimeout的时候  nextTick会先执行  nextTick的执行效率更高  因为不用检测时间

	showMes(res,"exit");//退出当前进程

	showMes(res,"on");//监听进程事件
	process.on("SIGINT",function(){
		console.log("in requesting from browser!");

	});

	showMes(res,"kill");//退出一个指定id进程
	//process.kill(process.pid,"SIGINT");  //对一个指定的进程发送信号

	res.write("<h3>事件:</h3>");

	process.on("exit",function(){//当前进程退出事件
		console.log("event:exit");
	});
	//process.exit(1);
	process.on("uncaughtException",function(){//进程抛出一个未被捕获的错误
		console.log("event:uncaughtException");
	});

	console.log("getuid:"+process.getgid());
	res.end("<br/><br/>end");
});

function showMes(res,procKey){
	var valType = typeof  process[procKey];
	if(valType!="function"||valType!="object"){
		res.write("<h5>process."+procKey+":</h5>"+process[procKey]);
	}
	else if(valType=="function"){
		res.write("<h5>process."+procKey+":</h5>"+process[procKey]);
	}
	else if(valType=="object"){
		// console.log(process[procKey]);
		res.write("<h5>process."+procKey+":</h5>");
		for(key in process[procKey]){
			
			res.write("<h5>process."+procKey+"."+key+":</h5>"+process[procKey][key]);
		}
	}
	
}

server.listen("8000","127.0.0.1");