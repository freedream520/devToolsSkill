
<template>
  <div class="main-cont">
    <h4 v-text="title"></h4>
    <dl>
      <dt>vuex</dt>
      <dd> 1.vuex中的数据需要在组件的computed中引用</dd>
      <dd> 2.vuex的count数据：<span v-text="count"></span></dd>
      <dd>3.<p v-on:click="add">点击添加vuex的count数据</p></dd>
    </dl>
    <p>
      <i class="iconfont icon-ordinaryorder"></i>
    </p>
    <p v-text="userName"></p>
    
    
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"首页",
      }
    },
    methods:{
      add(){
        this.$store.commit("ADD",1,1,23,213);
      }
    },
    computed:{
      count:function(){
        return this.$store.state.count
      },
      userName(){
        return this.$store.state.userName
      }
    },
    components:{
      
    }
  }
</script>



<style scoped lang="sass">
  @import "../assets/css/_ignore/mixin.scss";

  .main-cont{
    padding:pxToRem(20);
  }
  dl{
    dt{
      line-height: pxToRem(60);
    }
    dd{
      line-height: pxToRem(40);
    }
  }
</style>
