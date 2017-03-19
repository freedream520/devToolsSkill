<template>
  <div>
    <h4 class="text-center" v-text="title"></h4>
    <input type="text" v-model="name" class="input">
    <span class="btn btn-blue btn-block" v-on:click="login">确认</span>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"登陆",
        name:"lucy12"
      }
    },
    methods:{
      login:function(){
        this.$router.replace("/");
      }
    },
    computed:{
     
    },
    components:{
      
    }
  }
</script>



<style scoped lang="sass">
  @import "../assets/css/_ignore/mixin";

  h4{
    line-height: pxToRem(80);
  }
  .input{
    display: block;
    width: 80%;
    margin: pxToRem(20) auto;
    line-height: pxToRem(80);
  }
</style>
