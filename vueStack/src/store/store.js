import vue from "vue";
import Vuex from "vuex";
vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		count:0,
		userName:"习大大"
	},
	mutations: {
	   ADD (state,...arg) {
	   	console.log(arg);
	     	state.count++;
	   }
	}
});

export default store;
