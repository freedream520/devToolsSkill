var json={
	name:"aaaa",
	list:[123,"asd",{name:123}],
	o:{
		a:213,
		b:213123
	}
};

var o={
	name:"aaaa",
	list:[123,"asd",{name:123},function(){console.log(213)}],
	f:function(){
		alert(213);
	}
};


JSON.stringify(json);//正常序列化
JSON.stringify(o);//会忽略掉f以及list中的function