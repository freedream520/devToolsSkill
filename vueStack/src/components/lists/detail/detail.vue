<template>
  <div class="detail_wraper">
    <p class="back" @click="back">点击返回</p>
    <img :src="filmMsg.image" alt="">
    <p v-text="filmMsg.info"></p>
    <p v-text="filmMsg.title"></p>
    <img :src="filmMsg.image" alt="">
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        
      }
    },
    props:{
      filmMsg:Object,
      detailShow:Object
    },
    created:function(){
      this.filename=this.$route.params.name;
    },
    methods:{
      back:function(){
        console.log("back");
        this.detailShow.show=false;
      }
    },
    computed:{
     
    },
    components:{
      
    }
  }
</script>



<style scoped lang="sass">
  @import "../../../assets/css/_ignore/mixin";
  .detail_wraper{
    .back{
      line-height: pxToRem(80);
    }
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
    top:0;
    left:0;
    img{
      width: 100%;
    }
  }
</style>
