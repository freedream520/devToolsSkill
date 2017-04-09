// 不可枚举属性   array的length

//Object.keys() 获取不到原型链上的可枚举属性   属性顺序不会被打乱
// Object.getOwnPropertyNames(obj) 包含对象自身的所有属性（包括不可枚举属性，不包含Symbol属性）
// for in       可以获取到原型链上以及继承的父类的可枚举属性  属性顺序会被打乱


function Walk(){
	this.speed=100;
}
Walk.prototype.run = function() {
	console.log("run");
};




function Person(){
	this.name="小张";
	this.age=25;
	Walk.call(this,arguments);
}
Person.prototype=new Walk();
Person.prototype.say = function() {
	console.log(this.name);
};

var p=new Person();




Object.keys(p);// name age speed

for(var key in p){
	console.log(key); // name age speed say run
}