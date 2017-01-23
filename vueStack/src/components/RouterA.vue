<template>
  <div class="a-wrap">
    <h4 v-text="title"></h4>
    <dl>
      <dd>1.router-link-active会根据router的名字匹配  /vue 和 /vuex 会同时拥有激活的类名</dd>
    </dl>
    <ul>
      <li>1.java熟悉，免得被忽悠 （启动服务，返回页面和静态资源，简单的sql查询）</li>
      <li>2.vue精通 （饿了么教程看明白，想通透）</li>
      <li>3.node精通 （深入浅出nodejs）</li>
      <li>4.es6精通 （深入浅出es6）</li>
      <li>5.webpack精通 （问题收集，解决方案整理）</li>
    </ul>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"路由A",
      }
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
  @include DPR(".a-wrap",16px);
  dl{
    dt{
      line-height: pxToRem(30);
    }
  }
  ul{
    li{
      line-height: pxToRem(50);
      margin:pxToRem(20) 0;
    }
  }
</style>
