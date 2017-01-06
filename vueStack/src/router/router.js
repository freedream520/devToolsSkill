import Vue from 'vue';
import vueRouter from 'vue-router';

import VUE from "components/vue";
import Router from "components/router";
import Vuex from "components/vuex";
import Animate from "components/animate";

Vue.use(vueRouter);

const routes=[
	{
		path:"/",
		component:VUE
	},
	{
		path:"/vue",
		component:VUE
	},
	{
		path:"/router",
		component:Router
	},
	{
		path:"/Vuex",
		component:Vuex
	},
	{
		path:"/animate",
		component:Animate
	}
];

const router=new vueRouter({routes:routes});

export default router;