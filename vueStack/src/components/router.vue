<template>
  <div>
    <h4 v-text="title" class="text-center"></h4>
    <div>
      <h4>应用举例</h4>
      <ul>
        
      </ul>
    </div>
    <dl>
      <dt>注意事项：</dt>
      <dd>1.router-link-active会根据router的名字匹配  /vue 和 /vuex 会同时拥有激活的类名</dd>
    </dl>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"路由"
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
