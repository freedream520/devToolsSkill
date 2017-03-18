import "../../../style/about/about.scss";


$("#loadListsBtn").on("click",function(){
	require.ensure(["./listData.js","../../../components/lists/list.js"],function(require){
		var data=require("./listData.js");
		var tpl=require( "../../../components/lists/list.js");
		console.log("loaded",data,tpl);
		var html=tpl.default.tpl(data);
		$("#listsCont").html(html);
	},"listData");
	
})