var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
	
	res.writeHead(200,{"Content-Type":"text/plain"});
	

	// var global=JSON.stringify(JSON.parse(global) );
	res.write("keys of global:" );
	res.write("\n" );
	res.write("\n"+"__dirname:"+__dirname);
	res.write("\n"+"__filename:"+__filename);
	res.write("\n"+"require:"+require);
	res.write("\n"+"module:"+module);
	res.write("\n"+"module.exports:"+module.exports);


	res.write("\n"+"process.keys:");
	for(key in process){
		res.write("\n"+key);
	}
	console.log(process.cwd(),process.pid);
	res.end("\n"+"end");
	// res.end("end");
}).listen("8000","127.0.0.1");

