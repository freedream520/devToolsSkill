//数据格式局限于字符串 数字 对象 数组
//for in 会导致数据的字段顺序被打乱  可以使用Object.keys(o);

var origin={
	name:"join",
	age:25,
	props:{
		_name:"_join",
		_age:15,
		_props:{

		},
		_lists:[
			"item1",
			30,
			{
				id:1,
				type:"freeze",
			}
		]
	},
	lists:[
		"item1",
		30,
		{
			id:1,
			type:"freeze",
		}
	]
};

function isNotObject(o){
	return typeof o!="object";
}
function isObject(o){
	return Object.prototype.toString.call(o)=="[object Object]";
}

function isArray(o){
	return Object.prototype.toString.call(o)=="[object Array]";
}


function deepCopy(src){
	if(isNotObject(src)){
		return src
	}
	var dist;
	if(isObject(src)){
		dist={};
	}
	if(isArray(src)){
		dist=[];
	}
	Object.keys(src).forEach(function(key){
		var value=src[key];
		if(isNotObject(value)){
			dist[key]=value;
		}
		else{
			dist[key]=deepCopy(value);
		}
	});
	// for(key in src){
	// 	var value=src[key];
	// 	if(isNotObject(value)){
	// 		dist[key]=value;
	// 	}
	// 	else{
	// 		dist[key]=deepCopy(value);
	// 	}
	// }
	return dist;
}

