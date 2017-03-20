<template>
  <div >
    <div v-for="(group,i) in data" >
      <ul class="group" >
        <h2 class="group-title">{{group.ctxt}}</h2>
        <router-link v-for="(item,j) in group.body" :to="'/film/detail/'+i+'-'+j" tag="li">
          <p v-text="item.name" class="name" ></p>
          <img :src="item.image" >
          <p v-text="item.info" class="info" ></p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    data:function(){
      return {
        title:"animate",
        data:[
          
        ],
        detailShow:{
          show:false
        },
        filmMsg:{
          
        }
      }
    },
    created:function(){
      var self=this;
      var url="http://rc.mgtv.com/msite/rank";

      var param={
        c:3,
        limit:4,
        t:"day",
        callback:"aaa"
      };
      this.$http.jsonp(url,param).then(function(response){
        console.log(response.body.data);
        this.data=response.body.data;
      },function(error){
        console.log("error:",error);
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
  @import "../../assets/css/_ignore/mixin";
  ul.group{
    margin:pxToRem(40) pxToRem(20);
    >li{
      width:50%;
      display: inline-block;
      padding:pxToRem(10);
      margin: pxToRem(10) 0;
      box-sizing: border-box;
      .name{
        line-height: pxToRem(50);
      }
      .info{
        line-height: pxToRem(50);
      }
      img{
        width: 100%;
      }
    }
  }
</style>
