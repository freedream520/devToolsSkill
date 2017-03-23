//定义一个Box类
function Box(){
    //other code
    this.handlers = {};//存储事件的对象 
}
Box.prototype = {
    constructor: Box,
    //显示方法
    show: function (){
        //code
        //this.fire('show');
    },
    //关闭方法
    close: function (){
         //code
        //this.fire('close');
    },
    //监听方法，模拟addEventListener,其中type为事件函数，handler为需要触发的函数。
    addListener: function (type,handler){    
        if (typeof this.handlers[type] == 'undefined')this.handlers[type] = []; 
        this.handlers[type].push(handler);//将要触发的函数压入事件函数命名的数组中
    },
    //手动触发方法
    fire: function (type){
        if ( this.handlers[type] instanceof Array ){
            var handlers = this.handlers[type];
            //遍历事件函数监听的程序，依次执行
            for (var i=0;i<handlers.length;i++){
               handlers[i]();
            }
        }
    },
    //事件解绑
    removeListener: function (type,handler){
        if (!this.handlers[type]) return;
        var handlers = this.handlers[type];
        if (handler == undefined){
          handlers.length = 0;//不传某个具体函数时，解绑所有
        }else if( handlers.length ){    
            for ( var i=0;i<handlers.length;i++ ){
                if ( handlers[i] == handler ){
                                //解绑单个
                    this.handlers[type].splice(i,1);
                }
            }
        }
    }
}