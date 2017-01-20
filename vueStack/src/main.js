
import flexible from 'flexible';
import vueResource from "vue-resource";
import Vue from 'vue';
import vuex from "vuex";
import router from "./router/router";
import App from './App';
import store from "./store/store";

Vue.use(vueResource);


window.vm=new Vue({
  el: '#app',
  store,
  router,
  components: {"v-app": App }
})
