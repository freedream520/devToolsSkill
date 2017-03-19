<template>
  <div>
    <h4 v-text="title"></h4>
    <div>
      <p>根页面需要有顶级的router－view ：指定顶极页面的渲染位置</p>
      <p>router里面规定了路由的层级以及在哪一个组件的router－view中渲染</p>
      <p>router－link中的to 可以是相对路径  也可以是绝对路径 但一定要和路由表中的一致</p>
      <p>如果是相对路径，如果该组件没有子路由，会渲染在什么地方呢？会渲染到替换该组件的router－view里面</p>
      <p></p>
    </div>
    <ul class="link-lists">
      <li><router-link to="routerC">跳转到本页路由( header footer不会变)：routerC</router-link></li>
      <li><router-link to="/router/routerC">跳转到本页路由( header footer不会变)：/router/routerC</router-link></li>
      <li><router-link to="/router1">跳转到本页路由(footer不会变)：/router1</router-link></li>
      <li><router-link to="/routerC">跳转到顶层路由：/routerC</router-link></li>
      <li><router-link to="/login">点击跳转到根路由：/login</router-link></li>
    </ul>
    <ul class="link-lists">
      <li><router-link to="/">点击跳转到首页：/</router-link></li>
      <li><router-link to="/vuex">点击跳转到vuex：/vuex</router-link></li>
    </ul>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"路由跳转示例",
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
  .link-lists{
    
    margin: pxToRem(40) auto;
    border: 1px solid #0f0;
    li{
      text-indent: pxToRem(50);
      line-height: pxToRem(80);
      border-bottom: 1px solid #2f6;
    }
  }
</style>
