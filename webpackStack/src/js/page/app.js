//可以使用commonjs和es6的模块 webpack配置文件中的别名依然有用

// require("flexible");
// import $ from "zepto";

// import data from "json-loader!../test.json";

import "../../style/main.scss";
import Header from "../../components/header/header.js";//组件

// console.log(data);

$(document).on("click",function(){
	console.log("213");
});

$("#loadSyncModule").on("click",function(){
	console.log("click load");
	require.ensure(["swiper"],function(swiper,Header){
		console.log(arguments);
		window.swiper=swiper;
		var header=new Header({title:"title"});
		$("#header").html(header.tpl);
		console.log("click loaded");
	},"swiper");
});


