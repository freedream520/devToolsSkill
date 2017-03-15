//可以使用commonjs和es6的模块 webpack配置文件中的别名依然有用

// require("flexible");
// import $ from "zepto";

// import data from "json-loader!../test.json";
import "../../style/test.css";
import "../../style/main.scss";
import Header from "../../components/header.js";//组件

// console.log(data);

$(document).on("click",function(){
	console.log("213");
});

$("#loadSyncModule").on("click",function(){
	console.log("click load");
	require.ensure(["swiper"],function(swiper){
		window.swiper=swiper;
		var header=new Header({title:"title"});
		$("#header").html(header.tpl);
		console.log("click loaded");
	});
});






if((function(){console.log("hello");return false;})()){
	console.log("hello");
}
else{
	console.log("world");
}

if(setTimeout(function(){
	console.log("world");
},0)){
	console.log("hello");
}
else{
	console.log("world");
}