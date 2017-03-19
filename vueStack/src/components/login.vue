<template>
  <div>
    <h4 v-text="title"></h4>
    <input type="text" v-model="name">
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"登陆",
        name:"lucy"
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
