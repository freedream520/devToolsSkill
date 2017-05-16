let fs=require("fs");

console.log("__dirname:",__dirname);
console.log("__filename:",__filename);
console.log("process.cwd():",process.cwd());


fs.readFile("./fs.js",function(state,error){//在当前路径执行该js可以执行   在其他目录执行该js找不到改文件，导致读取文件失败
	if(error){
		console.log(error);
	}
	else{
		console.log(state);
	}
});

// __dirname: 总是返回被执行的 js 所在文件夹的绝对路径
// __filename: 总是返回被执行的 js 的绝对路径
// process.cwd(): 总是返回运行 node 命令时所在的文件夹的绝对路径
// ./: 跟 process.cwd() 一样，返回 node 命令时所在的文件夹的绝对路径


// 总结


// 除了require可以使用相对路径之外，其他地方都还用绝对路径