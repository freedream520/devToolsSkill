<template>
  <div>
    <h4 v-text="title"></h4>
   
    <div class="tips">
      <p>根页面需要有顶级的router－view ：指定顶极页面的渲染位置</p>
      <p>router里面规定了路由的层级以及在哪一个组件的router－view中渲染</p>
      <p>router－link中的to 可以是相对路径  也可以是绝对路径 但一定要和路由表中的一致</p>
      <p>如果是相对路径，如果该组件没有子路由，会渲染在什么地方呢？会根据当前路径生成新的路径，然后去路由表中查找并确定渲染的地方</p>
      <p>相对路径会根据当前浏览器的路径生成新的路径，由于组件的相互引用，这个新的路径有可能会导致在路由表中没有进行配置</p>
      <p>router－link中的to最好设置为绝对路径</p>
      <p></p>
    </div>
    <ul class="link-lists">
      <li><router-link to="routerC">跳转到本页路由( header footer不会变)：routerC</router-link></li>
      <li><router-link to="/routerC">跳转到本页路由( header footer不会变)：/routerC</router-link></li>
      <li><router-link to="/router/routerC">跳转到本页路由( header footer不会变)：/router/routerC</router-link></li>
      <li><router-link to="router/routerC">跳转到本页路由( header footer不会变)：router/routerC</router-link></li>
      <li><router-link to="/router1">跳转到本页路由(footer不会变)：/router1</router-link></li>
      <li><router-link to="/router/router1">跳转到本页路由(footer不会变)：/router/router1</router-link></li>
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
  @include dpr(".tips",22px);
  .tips{
    margin:pxToRem(30) pxToRem(20);
    p{
      line-height: pxToRem(40);
      margin:pxToRem(20) auto;
    }
  }
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
