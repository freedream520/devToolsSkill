import Vue from 'vue';
import vueRouter from 'vue-router';
import App from "../App.vue";
import VUE from "components/vue";
import Router from "components/router";
import RouterA from "components/RouterA";
import RouterC from "components/RouterC";
import Vuex from "components/vuex";

const lists = r => require.ensure([], () => r(require('components/lists/lists')), 'lists');
const filmDetail = r => require.ensure([], () => r(require('components/lists/detail/detail')), 'filmDetail');

const Login = function (resolve){
	require.ensure([],function(){
		resolve(require('components/login'));
	},"login");
}


//会导致一个问题，有些路由已经用不到了，但是依然会被保留，导致该文件越来越臃肿

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
				path:"/router/router1",
				component:RouterC
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
				path:"lists",
				component:lists
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
	{
		path:"/film/detail/:index",
		component:filmDetail
	},
	
];

export default routes;