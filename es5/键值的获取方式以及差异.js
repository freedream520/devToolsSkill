//Object.keys() 获取不到原型链上的属性   属性顺序会被打乱
// for in       可以获取到原型链上的属性 属性顺序不会被打乱



function Person(){
	this.name="小张";
	this.age=25;
}

Person.prototype.say = function() {
	console.log(this.name);
};

var p=new Person();

Object.keys(p);// name age

for(var key in p){
	console.log(key);
}