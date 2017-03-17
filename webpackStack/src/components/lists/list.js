import listTpl from "./list.tpl";
import "./list.scss";

// export var a=213;
var a=123;
export {a};

// export {//这种写法是不行的
// 	b:"bbb"
// }

// export function(){//这种写法也是不对的
// 	console.log("aaa");
// }

export function aaa(){
	console.log("aaa");
}

var tpl={
	tpl:listTpl
};
export default tpl; 
setTimeout(function(){
	a=2342343;
},6000);