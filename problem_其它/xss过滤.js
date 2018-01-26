/*
    https://segmentfault.com/a/1190000008821456
*/

/**
 XSS 攻击的原理是，攻击者插入一段可执行的 JavaScripts 脚本，该脚本会读出用户浏览器的 cookies 并将它传输给攻击者，
 攻击者得到用户的 Cookies 后，即可冒充用户。

 但是要防范 XSS 也很简单，在写入 cookies 时，将 HttpOnly 设置为 true，客户端 JavaScripts 就无法读取该 cookies 的值，
 就可以有效防范 XSS 攻击。

 因为 Tokens 也是储存在本地的 session storage 或者是客户端的 cookies 中，也是会受到 XSS 攻击。所以在使用 tokens 的时候，
 必须要考虑过期机制，不然攻击者就可以永久持有受害用户帐号。

 **/

function $xss(str,type){
        
        //空过滤
        if(!str){
            return str===0 ? "0" : "";
        }

        switch(type){
            case "none": //过度方案
                return str+"";
                break;
            case "html": //过滤html字符串中的XSS
                return str.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r){
                    return "&#" + r.charCodeAt(0) + ";"
                }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g,"<br />").replace(/\r/g,"<br />");
                break;
            case "htmlEp": //过滤DOM节点属性中的XSS
                return str.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(r){
                    return "&#" + r.charCodeAt(0) + ";"
                });
                break;
            case "url": //过滤url
                return escape(str).replace(/\+/g, "%2B");
                break;
            case "miniUrl":
                return str.replace(/%/g, "%25");
                break;
            case "script":
                return str.replace(/[\\"']/g, function(r){
                    return "\\" + r;
                }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
                break;
            case "reg":
                return str.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a){
                    return "\\" + a;
                });
                break;
            default:
                return escape(str).replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r){
                    return "&#" + r.charCodeAt(0) + ";"
                }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g,"<br />").replace(/\r/g,"<br />");
                break;
        }
    }
