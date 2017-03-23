var http=require("http");
var koa=require("koa");

var  fs=require("fs");

var app=koa();


app.use(function *(next){
	this.set("Content-Type","text/html");
	this.body="hello koa!";
	
	yield next;
	
});


app.use(function *(next){
	
	var cookie=this.cookies.test;
	this.cookies.set("test",123);

	console.log(this.accepts("json","html","text"));

	var stream=fs.createReadStream("./filmImage/奔爱.png",{
		encoding:"utf8"
	});

	this.body=this.response;
	var self=this;
	stream.pipe(self.response);
	yield next;
});

app.listen("8000");

