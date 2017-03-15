import "../../../style/about/about.scss";

// import listTpl from  "../../../components/lists/list.js";

// $("#loadListsBtn").on("click",function(){
// 	var html= listTpl({
// 		dataLists:[
// 			{name:"李明"},{name:"angle"}
// 		]
// 	});
// 	$("#listsCont").html(html);
// })

// import listTpl from  "../../../components/lists/list.js";

$("#loadListsBtn").on("click",function(){
	require.ensure([],function(){
		var aaa=require("../../../components/lists/list.js").tpl;
		console.log(aaa);
		var html=aaa({
			dataLists:[
				{name:"李明"},{name:"angle"}
			]
		});
		$("#listsCont").html(html);
	});
	
},"aaa")