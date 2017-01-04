<template>
  <div>
    <h4 v-text="title"></h4>
    <v-footer></v-footer>
  </div>
</template>

<script>
  // require("style!css!scss!./assets/css/base.scss");

  import footer from "components/footer/footer.vue";

  export default {
    data:function(){
      return {
        title:"vue栈"
      }
    },
    components:{
      "v-footer":footer
    }
  }
</script>

<style>
  import("style!css!scss!./assets/css/base.scss");
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
