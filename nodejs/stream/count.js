"use strict";

let fs=require("fs");

let readStream=fs.createReadStream("../filmImage/奔爱.png");//718Kb 总共读取了12次   平均每次在64Kb左右


let i=0;
readStream.on("data",function(chunk){
	i+=1;
	console.log(chunk);
});

readStream.on("end",function(){
	console.log(i);
});