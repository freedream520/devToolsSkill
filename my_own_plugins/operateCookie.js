/**
 * Created by wy on 2018/1/18 0018.
 */
export const userInfoName='userInfo'

export function setCookie(name,value) {
    var Days = 1/48;//30分钟过期
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ value + ";expires=" + exp.toGMTString()+";domain=baicu.com;path=/";
}

export function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return '';
}

export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);//1ms过期
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";domain=baidu.com;path=/";
}

