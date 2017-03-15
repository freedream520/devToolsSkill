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
	});
});



if(console.log("hello")){
	console.log("hello");
}
else{
	console.log("world");
}


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

function *yids(){
    var a=0;
    var b=1;
    while(true){
        yield a;
        [a,b]=[b,a+b]
    }
}
var [a,b,c,d,e,f]=yids();
console.log(a,b,c,d,e,f);