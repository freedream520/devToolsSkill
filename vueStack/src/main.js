
import flexible from 'flexible';
import vueResource from "vue-resource";
import vueRouter from "vue-router";
import Vue from 'vue';
import vuex from "vuex";
import Validator from "vue-validator";
import routes from "./router/router";
import store from "./store/store";

Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(Validator);

const router=new vueRouter({routes:routes,mode:"hash"});

router.beforeEach(function(to,from,next){//判断页面是否需要登录
	var needLogin=to.meta.needLogin;
	var isLogined=true;
	if(needLogin&&!isLogined){
		next("/login");
	}
	else{
		next();
	}
});

window.vm=new Vue({
  el: '#app',
  store,
  router,
})
