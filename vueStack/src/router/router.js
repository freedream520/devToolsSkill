import Vue from 'vue';
import vueRouter from 'vue-router';
import App from "../App.vue";
import VUE from "components/vue";
import Router from "components/router";
import RouterA from "components/RouterA";
import RouterC from "components/RouterC";
import Vuex from "components/vuex";
import Animate from "components/animate";
import Login from "components/login";

// Vue.use(vueRouter);

//会导致一个问题，有些路由已经用不到了，但是依然会被保留，导致该文件越来越臃肿
//如果children里面的不会继承父路由的路径，那children有何用？可是放到外面

const routes=[
	{
		path:"/",
		component:App,
		children:[
			{
				path:"",
				redirect:"vue"
			},
			{
				path:"vue",
				component:VUE
			},
			
			{
				path:"router",
				component:Router,
				children:[
					{
						path:"",
						redirect:"routerA"
					},
					{
						path:"routerA",
						component:function(resolve,reject){
							require(['components/RouterA'],resolve);
						}
					},
					{
						path:"routerB",
						component:function(resolve,reject){
							require(['components/RouterB'],resolve);
						}
					},
					{
						path:"routerC",
						component:RouterC
					},
					{
						path:"/router/routerC",
						component:RouterC
					},
				]
			},
			{
				path:"/router1",
				component:RouterC
			},
			{
				path:"vuex",
				component:function(resolve,reject){
					resolve(Vuex);
				}
			},
			{
				path:"animate",
				component:function(resolve,reject){
					resolve(Animate);
				}
			}
		]
	},
	{
		path:"/login",
		component:Login
	},
	{
		path:"/routerC",
		component:RouterC
	},
];

// const router=new vueRouter({routes:routes});

// router.beforeEach(function(to,from,next){
// 	console.log(to,from);
// 	next();
// });
export default routes;