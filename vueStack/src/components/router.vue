<template>
  <div>
    <div class="tab-wraper">
      <ul>
        <li class="text-center"><router-link to="/router/routerA" replace>routerA</router-link></li>
        <li class="text-center"><router-link to="/router/routerB" replace>routerB</router-link></li>
      </ul>
    </div>
    <div>
    <div class="wraper">
      <a class="fc-link teach-link" href="http://blog.csdn.net/sinat_17775997/article/details/52549123">实例教程</a>
      <transition name="slide">
        <router-view></router-view>
      </transition>
      
    </div>
      
    </div>
    
  </div>
</template>

<script>
  
  export default {
    data:function(){
      return {
        title:"路由"
      }
    },
    mounted(){
      console.log(this);
      this.$router
    },
    methods:{
     
    },
    computed:{
     
    },
    components:{
      
    }
  }
  
</script>



<style scoped lang="sass">
  @import "../assets/css/_ignore/mixin";
  @import "../assets/css/_ignore/transition";

  $headerH:pxToRem(80);
  .tab-wraper{
    height: $headerH;
    ul{
      display: flex;
      background-color: #f6f6f6;
      border-bottom: 1px solid #f93;
      li{
        flex:1;
        a{
          display: block;
          line-height: $headerH;
        }
        .router-link-active{
          background-color: #e7e7e7;
        }
      }
    }
  }
  .wraper{
    width: 100%;
    border:1px solid #f33;
    padding:0 pxToRem(20) pxToRem(100) pxToRem(20);
    box-sizing:border-box;
  }
  .teach-link{
    line-height: pxToRem(60);
  }


</style>
