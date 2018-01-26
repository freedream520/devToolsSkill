/**
 * Created by wy on 2018/1/25 0025.
 */

// https://juejin.im/post/59e85eebf265da430d571f89 文章链接

// setTimeout setInterval Promise


setTimeout(function(){
    console.log('定时器开始啦')
});

new Promise(function(resolve){
    console.log('马上执行for循环啦');
    for(var i = 0; i < 1000000000; i++){
        i == 1000000000 && resolve();
    }
}).then(function(){
    console.log('执行then函数啦')
});

console.log('代码执行结束');


// 马上执行for循环啦
// 代码执行结束
//  执行then函数啦
// undefined
//定时器开始啦