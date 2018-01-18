/**
 * Created by wy on 2018/1/16 0016.
 */

// 跨域环境下 前端层面进行数据共享的问题

/**
 * 方法1：通过iframe和window.name进行处理
 *
 * window.name可以实现跨域资源共享   只要在同一个窗口中打开的页面  window.name信息是共享的
 * 该方法需要页面加载完成后才可以   如果写成工具类的话  需要异步处理  比较麻烦一些
**/

function getData ( url, fn ) {
    var oIframe = document.createElement('iframe'),
        firstBtn = true,
        loadFn = function () {
            if ( firstBtn ) {
                //导航回同一域下的air.html，以便获取到name值
                oIframe.contentWindow.location = 'http://www.a.com/air.html';
                firstBtn = false;
            } else {
                fn( oIframe.contentWindow.name );
                oIframe.contentWindow.document.write('');
                oIframe.contentWindow.close();
                document.body.removeChild(oIframe);
                oIframe.src = '';
                oIframe = null;
            }
        };

    oIframe.src = url;

    //1.第一次iframe加载完毕触发事件，执行loadFn函数，会将iframe导航回air.html
    //2.air.html加载完毕后又会触发事件，再次执行loadFn函数，此时会走else
    if ( oIframe.attachEvent ) {
        oIframe.attachEvent( 'onload', loadFn );
    } else {
        oIframe.onload = loadFn;
    }

    document.body.appendChild(oIframe);
}


//页面加载完毕后调用getData函数去获取数据
window.onload = function () {
    getData( 'http://www.b.com/target.html', function ( data ) {
        console.log( data );
    } );
}

/**
 * 方法2  通过设置cookie的domain   实现同一级域名下的cookie共享
 *
 * a.baicu.com   b.baidu.com   进行登录信息同步化处理
 * 使用在官网和活动系统的登陆状态一致化问题
 * 优点 1 不需要等待页面加载完成  可以同步执行 2 无任何兼容性问题
**/


// 设置cookie的时候 需要设置域名domain 如

const exp=new Date()
document.cookie = name + "="+ value + ";expires=" + exp.toGMTString()+";domain=baidu.com;path=/";

