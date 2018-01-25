/**
 * Created by wy on 2018/1/25 0025.
 */

// 一个防jquery的迭代器

let $={
    each:function(arr,fn){
        for(let i=0,l=arr.length;i<l;i++){
            fn.call(arr[i],arr[i],i)
        }
    }
}

let arr = ['a', 'c', 'b'];

$.each(arr,function (item,index) {
    console.log(`${index}:${item}`)
})


//一个可以记录状态的迭代器   使用了闭包  可以实现状态的缓存
// 另一种典型的用法是事件订阅器


var Iterator = function(obj) {
    var current = 0;

    var next = function() {
        current += 1;
    };

    var isDone = function() {
        return current >= obj.length;
    };

    var getCurrItem = function() {
        return obj[current];
    };

    var len = function() {
        return obj.length;
    }

    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem,
        length: len,
    }
};

