<template>
  <div>
    <h4 v-text="title"></h4>
    <p v-text="userName"></p>
     <p v-text="count"></p>
    <p v-on:click="add">点击添加</p>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"头部",
      }
    },
    methods:{
      add(){
        this.$store.commit("ADD",1,1,23,213);
      }
    },
    computed:{
      count:function(){
        return this.$store.state.count
      },
      userName(){
        return this.$store.state.userName
      }
    },
    components:{
      
    }
  }
</script>



<style scoped lang="sass">

</style>
