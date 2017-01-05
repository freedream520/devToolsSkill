
import flexible from 'flexible';
import Vue from 'vue';
import vuex from "vuex";
import App from './App';
import store from "./store/store";



window.vm=new Vue({
  el: '#app',
  store,
  components: {"v-app": App }
})
