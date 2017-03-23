var http=require("http");
var url=require("url");


//path 不包括哈希值    
//host :hostname  前者包含端口号   		后者不包含
//path :pathname  前者包含查询字符串 	后者不包含
//search   包含了?号   	?query=string
//query    不包含问号	query=string
//hash     #hash        

//parse    	第二个参数  意味着 ，查询字符串会解析成字典的形式  第三个参数可以解析//a/b.html这样的字符串
//format	把一个字典转换成一个标准路径


var href="http://www.baidu.com/index/a/about.html?a=1&b=2&a=3#MMM";
var href1="//a/b";

var hrefObj={
	protocol:"http:",
	host:"www.baidu.com",
	port:"3000",
	search:"?a=123&b=234",
	hash:"#mmm"
};


//console.log(url);
console.log(url.parse(href));
console.log(url.parse(href1,true,true));
console.log(url.format(hrefObj));