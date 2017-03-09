//可以使用commonjs和es6的模块 webpack配置文件中的别名依然有用

// require("flexible");
// import $ from "zepto";

// import data from "json-loader!../test.json";
import "../../style/test.css";
import "../../style/main.scss";
import Header from "../../components/header.js";//组件

// console.log(data);

$(document).on("click",function(){
	alert("tap");
});

var header=new Header({title:"title"});
document.getElementById("header").innerHTML=header.tpl;
