<template>
  <div>
    <h4 class="text-center" v-text="title"></h4>
    <input type="text" v-model="user" class="input" ref="user">
    <span class="btn btn-blue btn-block" v-on:click="login">确认</span>
  </div>
</template>

<script>

  export default {
    data:function(){
      return {
        title:"登陆",

      }
    },
    methods:{
      login:function(){
        var user=this.$refs.user.value;
        this.$store.commit("USER",user);
        this.$router.replace("/");

      }
    },
    computed:{
      user:function(){
        return this.$store.state.user;
      }
    },
    components:{

    }
  }
</script>



<style rel="stylesheet/scss" scoped lang="scss">
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
