import "../../../style/about/about.scss";

import Lists from  "../../../components/lists/list.js";

$("#loadListsBtn").on("click",function(){
	var lists=new Lists({
		dataLists:[
			{name:"李明"},{name:"angle"}
		]
	});
	$("#listsCont").html(lists.html);
})