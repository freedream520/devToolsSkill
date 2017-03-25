/**

精度问题
0.1+0.2=0.3000000000001

解决办法 toFixed  会自动四舍五入

var num=(0.1+0.2).toFixed(2);//0.30
0.299999.toFixed(2);// 0.30


四舍五入修复：

0.35.toFixed(2); // 期望得到 0.4

function fixed(num, s) {
    var times = Math.pow(10, s)
    var des = num * times + 0.5
    des = parseInt(des, 10) / times
    return des + ''
}


超出js数值范围的订单号

大数值的订单号9148368244236619在调用接口时自动变成9148368244236620
把数值存到属性上，取成字符串  不要转换成数字  也不要进行数值计算

**/

