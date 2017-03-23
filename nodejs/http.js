var http=require("http");
var query=require("querystring");
var fs=require("fs");

//。一般来说只有method url 以及headers有用 其他的字段在项目中很少有用到
//1.深度嵌套回调问题 怎么解决 

var server=http.createServer(function(req,res){
	var arr=[];
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

	

	
	//获取卖座网的正在上映的电影信息

	http.get({
		host:"m.maizuo.com",
		path:"/v4/api/film/now-playing?page=1&count=1000"
	},function(res1){
		var arr=[];
		Object.keys(res1).forEach(function(item,index){
			res.write("<br/>");
			res.write(item);
		});

		var resData="";
		res1.on("data",function(d){
			resData+=d;
			//console.log(d);
		});

		res1.on("end",function(){
			//res.write(resData);
			//var data=JSON.stringify(resData);
			var strData=JSON.stringify(resData);
			var objData=JSON.parse(resData);
			objData.data.films.forEach(function(item,index){

				var src=item.cover.origin;
				//console.log(src);
				var h4="<h3>"+item.name+"</h3>"
				var img="<img src="+src +" />";
				var html=h4+img;
				res.write(html);

				http.get(src,function(res){
					var imgData="";
					res.setEncoding("binary");
					res.on("data",function(d){
						imgData+=d;
					});

					res.on("end",function(d){

						fs.writeFile("filmImage/"+item.name+".png",imgData,"binary",function(error){
							console.log(error);
						});
					});
				})
			});
			
			res.end("end");
		});

	});


	function sendArryData(arr){
		for(var i=0;i<arr.length;i++){
			res.write(arr[i]);
			res.write("<br/>");
		}
	}

});


server.listen(8000,"127.0.0.1");

