// "use strict";

// 1.不存在变量提升  需要先声明定义然后才能使用
// 2.暂时性死区   let命令声明变量之前 独属于死区
// 3.let有块级作用域

if (true) {
	//死区开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError
  console.log(a);//变量提升   undefined

  let tmp; // 死区结束
  var a=456;
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}


if(true){
	console.log(tmp);//报错   在let命令声明tmp之前的代码  都属于死区  会报错
	let tmp=123;
}


// 3.不允许重复声明

function test(){
	var a=213;
	let a=456;
}
test();



//块级作用域
var tmpa = new Date();

function f(){
  console.log(tmpa);
  if (false){
    var tmpa = "hello world";
  }
}

f() // undefined //作用域链 块级作用域 


//块级作用域
var tmpa = new Date();

function ff(){
  console.log(tmpa);
  if (false){
    let tmpa = "hello world";
  }
}

ff() // new Date 


//const和let一样   存在块级作用域的问题 没有变量提升 有暂时性死区

//var声明的变量          会自动添加到global属性上
//let const声明的变量    不会自动添加到global属性上



// 另一个作用是用于在循环的时候防止var变量被修改的
//这是因为let声明的变量仅仅在自己的块级作用域起作用，出了这个块级作用域就不起作用。
// 任何一对花括号（这玩意：{ }）中的语句都属于一个块，在花括号里面用let定义的所有变量在花括号外都是不可见的，我们称之为块级作用域。


var arr = [ ];
for(let i=0;  i<10;  i++){
    arr[i] = function(){
        alert(i)
    }
}
arr[8](); //结果：8



// 用var 声明变量的时候会出现“变量提升“的现象。
// “ 变量提升“是什么鬼？新概念第一次听？前端君快来解释一下！
// 再看一段简短的代码：

var a = 1;
(function(){
    alert(a);
    var a = 2;
})();//结果：undefined