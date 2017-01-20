<template>
  <div>
    <h4 v-text="title"></h4>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        title:"我的",
        page:1,
        count:10
      }
    },
    created:function(){
      var url="http://m.maizuo.com/v4/api/film/now-playing";
      var param={
        page:this.page,
        count:this.page*this.count
      };
      this.$http.get(url,{"page":1,count:10}).then(function(response){
        console.log(response);
        alert(123);
      },function(error){
        console.log(error);
        alert("error");
      });


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
