<template>
  <div class="text-center wraper">
    <h4 v-text="title"></h4>
    <h4>数据存储于localstorage中 并根据操作进行存储</h4>
    <p>当前用户：<span v-text="user"></span></p>
    <p @click="add">点击修改store中的数据：<span>{{count}}</span></p>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"vuex",

      }
    },
    methods:{
      add:function(){
        this.$store.commit("ADD",1)
      }
    },
    computed:{
      user:function(){
        return this.$store.state.user;
      },
      count:function(){
        return this.$store.state.count;
      }
    },
    components:{
      
    }
  }
</script>



<style scoped lang="sass">
  @import "../assets/css/_ignore/mixin";

  @include dpr(".wraper",26px)
  .wraper{
    h4{
      line-height: pxToRem(60);
    }
    p{
      line-height: pxToRem(60);
    }
  }
</style>
