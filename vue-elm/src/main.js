import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import flexible from "flexible";//页面尺寸自适应

import store from "./vuex/store.js";

import App from "./App";
import Goods from "components/goods/goods.vue";
import Ratings from "components/ratings/ratings.vue";
import Seller from "components/seller/seller.vue";


Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);


const routes=[
	{path:"/goods",component:Goods},
	{path:"/ratings",component:Ratings},
	{path:"/seller",component:Seller}
];
const router=new VueRouter({routes :routes });

new Vue({
	el:"#box",
	router,
	store:store,
	data:function(){
		return {
			name:"哈哈哈"
		}
	},
	methods:{

	},
	components:{
		"v-app":App
	}
});


