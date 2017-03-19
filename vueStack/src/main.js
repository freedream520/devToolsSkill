
import flexible from 'flexible';
import vueResource from "vue-resource";
import vueRouter from "vue-router";
import Vue from 'vue';
import vuex from "vuex";
import Validator from "vue-validator";
import routes from "./router/router";
import App from './App';
import store from "./store/store";

Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(Validator);

const router=new vueRouter({routes:routes,mode:"hash"});


window.vm=new Vue({
  el: '#app',
  store,
  router,
  components: {"v-app": App }
})
