import vue from "vue";
import Vuex from "vuex";
vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		count:0,
		footer:[
			{
				name:"首页"
			},
			{
				name:"理财"
			},
			{
				name:"发现"
			},
			{
				name:"我的"
			},
		]
	},
	mutations: {
	   add (state) {
	   	alert("dispatch");
	     	state.count+=1;
	   }
	}
});

export default store;
