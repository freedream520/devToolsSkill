<template>
  <div>
    <v-header></v-header>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from "components/header/header.vue";
  import footer from "components/footer/footer.vue";

  export default {
    data:function(){
      return {
        title:"vue栈"
      }
    },
    components:{
      "v-header":header,
      "v-footer":footer
    }
  }
</script>

<style lang="sass">
  @import "./assets/css/base.scss";
  body{
    background-color: #f8f8f8;
    position: relative;
    padding-bottom: pxToRem(100);
  }
</style>

<style scoped lang="sass">

</style>
