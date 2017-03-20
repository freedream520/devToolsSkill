<template>
  <div class="detail_wraper text-center">
    <h3 class="back text-left" @click="back">点击返回</h3>
    <p v-text="filmMsg.name" ></p>
    <img :src="filmMsg.image" :alt="filmMsg.name">
    <p v-text="filmMsg.desc"></p>
    <p v-text="filmMsg.info"></p>
    <p v-text="filmMsg.title"></p>
    
    <p>播放地址：<a :href="filmMsg.play_url">点击播放</a></p>
  </div>
</template>

<script>
 
  export default {
    data:function(){
      return {
        filmMsg:{}
      }
    },
    created:function(){
      var self=this;
      var url="http://rc.mgtv.com/msite/rank";
      var index=this.$route.params.index;
      index=index?index.split("-"):[0,0];
      console.log(index);
      var param={
        c:3,
        limit:4,
        t:"day",
        callback:"aaa"
      };
      this.$http.jsonp(url,param).then(function(response){
        console.log(response.body.data);
        this.filmMsg=response.body.data[index[0]].body[index[1]];
      },function(error){
        console.log("error:",error);
      });
      
    },
    methods:{
      back:function(){
        
        this.$router.go(-1);
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
    img{
      width: 7rem;
    }
    .back{
      line-height: pxToRem(80);
    }
    >p{
      line-height: pxToRem(50);
    }
    
  }
</style>
