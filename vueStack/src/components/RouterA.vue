<template>
  <div class="a-wrap">
    <h4 v-text="title"></h4>
    <dl>
      <dt>vue</dt>
      <dd>（饿了么教程看明白，想通透）</dd>
      <dd></dd>
      <dd>组件的按需加载（减少主文件的体积，模块切割，按需加载）</dd>
      <dd>热更新（单页应用中修改代码后实现局部更新）</dd>
      <dd>node服务和java或者php服务的共存</dd>
    </dl>
    <dl>
      <dt>vue-router</dt>
      <dd>router-link-active会根据router的名字匹配  /vue 和 /vuex 会同时拥有激活的类名</dd>
    </dl>
    <dl>
      <dt>node</dt>
      <dd>node基础（深入浅出nodejs）</dd>
      <dd>node连接mysql数据库</dd>
      <dd>实现前后端分离，node作为作为中间服务器（渲染页面、转发请求....）<a href="https://segmentfault.com/a/1190000007992200" class="fc-link">教程地址</a></dd>
      <dd></dd>
    </dl>
    <dl>
      <dt>webpack</dt>
      <dd><a href="https://segmentfault.com/a/1190000007892189" class="fc-link">教程地址</a></dd>
    </dl>
    <dl>
      <dt>java</dt>
      <dd>java基础，启动简单的服务器，处理请求，连接数据库，简单的sql查询等简单应用场景</dd>
    </dl>
    <ul>
      <li>4.es6精通 （深入浅出es6）</li>
      <li>5.webpack精通 （问题收集，解决方案整理）</li>
      <li>6.单元测试的编写</li>
      <li>8.自动生成api文档</li>
    </ul>
    <ul>
      <li>可以做的事情</li>
      <li>1.看sagmentdefault上面的关于node、es6、vue的文章部分</li>
      <li></li>
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
  @include DPR(".a-wrap dl dd",14px);
  .a-wrap{
    padding-bottom: pxToRem(200);
  }
  dl{
    dt{
      line-height: pxToRem(40);
      font-weight: 600;
      margin:pxToRem(20) 0;
    }
    dd{
      line-height: pxToRem(40);
      margin:pxToRem(10) 0;
    }
  }
  ul{
    margin-top:pxToRem(50);
    li{
      line-height: pxToRem(50);
      margin:pxToRem(20) 0;
    }
  }
</style>
