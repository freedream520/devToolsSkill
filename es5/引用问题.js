function addNumber(num) {
	return num+100;
}

addNumber(100);//200

var add1=addNumber;

addNumber=null;

var result=add1(200);//这里依然可以调用  因为addNumber也是一个变量  引用了函数的指针，addNumber=null只是清除了指针指向，并没有清除原函数
console.log(result);






var o1={name:123};

var o2=o1;

o1=null;

o2.name;