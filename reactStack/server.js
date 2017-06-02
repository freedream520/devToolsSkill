//express的核心是http模块

var http=require("http");
var express=require("express");
var hbs=require("hbs");
var app=express();

let axios=require("axios");

app.use(express.static(__dirname+"/dist"));//设置静态资源路径
app.set("view engine","hbs");//设置模板引擎
app.set("views",__dirname+"/views");//设置视图路径

var bannerUrl="https://www.51rz.com/?m=BannerConfig&a=index&type=wxfwh&_=1495173691583";
var url="https://www.51rz.com/?m=Tender&s=wx_tot&first=10&ct1=1&pageIndex=1&pageSize=1";

app.use("/index",function(req,res){

	res.render("index.hbs",{
		title:"人众金服"
	});
});



app.use("/api/banner",function(req,res){

	axios.get(bannerUrl).then(function(data){
		res.json(data.data);
	});

});
app.use("/api/homeList",function(req,res){

	axios.get(url).then(function(data){
		res.json(data.data);
	});

});


app.use("/api/testXHR",function(req,res){
	console.log(req.head,req.params,req.query);
	res.json({
		aaa:"aaa success!"
	});

});


app.listen(3000);