<template>
  <div>
    <h4 v-text="title"></h4>
    <p v-text="count"></p>
    <p v-on:click="add">点击添加</p>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"头部",
        count:this.$store.state.count
      }
    },
    methods:{
      add(){
        alert("add");
        this.$store.dispatch("add");
      }
    },
    components:{
      
    }
  }
</script>



<style scoped lang="sass">

</style>
