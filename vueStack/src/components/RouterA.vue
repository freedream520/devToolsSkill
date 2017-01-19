<template>
  <div>
    <h4 v-text="title"></h4>
    <dl>
      <dd>1.router-link-active会根据router的名字匹配  /vue 和 /vuex 会同时拥有激活的类名</dd>
    </dl>
    <ul>
      <li>1.java熟悉，免得被忽悠</li>
      <li>2.vue精通</li>
      <li>3.node精通</li>
      <li>4.es6精通</li>
      <li>5.webpack精通</li>
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

</style>
