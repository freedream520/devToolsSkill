// 要求：
//
// 此类继承自Date，拥有Date的所有属性和对象
// 此类可以自由拓展方法


let A=function (){
    this.constructor=Date

}
A.prototype=new Date()

let a=new A()

a.getTime()    //VM16750:9 Uncaught TypeError: a.getTime is not a function



