<template>
  <div>
    <h4 class="text-center" v-text="title"></h4>
    <router-link to="testRelativePath" tag="h3" class="fc-link">点击查看该相对路由的最终生成路径 to:testRelativePath</router-link>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"路由C分别被渲染到不同的层级路由下",
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
  @include dpr("h4",28px);

  h4{
    line-height: pxToRem(100);
    color: #f33;
  }
</style>
