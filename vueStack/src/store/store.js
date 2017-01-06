import vue from "vue";
import Vuex from "vuex";
vue.use(Vuex);


//state
const state={
	count:0,
	userName:"习大大"
};



//mutations
const mutations={
   ADD(state,payload) {
   	console.log(payload);
     	state.count++;
   }
};


//store
const store=new Vuex.Store({
	state:state,
	mutations: mutations
});

export default store;
