import vue from "vue";
import Vuex from "vuex";
vue.use(Vuex);


//state
const state={
	count:localStorage.getItem("count")||0,
	user:localStorage.getItem("user")||""
};



//mutations
const mutations={
   ADD(state,payload) {
   	
    state.count=state.count*1+payload*1;
    localStorage.setItem("count",state.count);
   },
   USER(state,payload){
   	state.user=payload;
   	localStorage.setItem("user",payload);
   }
};


//store
const store=new Vuex.Store({
	state:state,
	mutations: mutations
});

export default store;
