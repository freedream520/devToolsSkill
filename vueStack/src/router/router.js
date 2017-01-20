import Vue from 'vue';
import vueRouter from 'vue-router';

import VUE from "components/vue";
import Router from "components/router";
import RouterA from "components/RouterA"
import Vuex from "components/vuex";
import Animate from "components/animate";

Vue.use(vueRouter);

const routes=[
	{
		path:"/",
		component:function(resolve,reject){
			resolve(VUE);
		}

	},
	{
		path:"/vue",
		component:function(resolve){
			resolve(VUE);
		}
	},
	{
		path:"/router",
		component:Router,
		children:[
			{
				path:"/router/routerA",
				component:function(resolve,reject){
					require(['components/RouterA'],resolve);
				}
			},
			{
				path:"/router/routerB",
				component:function(resolve,reject){
					require(['components/RouterB'],resolve);
				}
			}
		]
	},
	{
		path:"/vuex",
		component:function(resolve,reject){
			resolve(Vuex);
		}
	},
	{
		path:"/animate",
		component:function(resolve,reject){
			resolve(Animate);
		}
	}
];

const router=new vueRouter({routes:routes});

// router.beforeEach(function(to,from,next){
// 	console.log(to,from);
// 	next();
// });
export default router;