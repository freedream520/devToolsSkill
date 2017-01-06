<template>
  <div>
    <div class="container">
      <router-view></router-view>
    </div>

    <div class="footer">
      <ul>
        <li v-for="(nav,i) in items" class="text-center"  >
          <router-link :to="nav.link">
            <i class="iconfont" :class="nav.icon"></i>
            <p v-text="nav.text"></p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import footer from "components/footer.vue";

  export default {
    data:function(){
      return {
        title:"vue栈",
        activeIndex:0,
        items:[
          {text:"vue",icon:"icon-shouye",link:"/vue"},
          {text:"router",icon:"icon-wodedingdan",link:"/router"},
          {text:"vuex",icon:"icon-wodeyouhuiquan",link:"/Vuex"},
          {text:"动画",icon:"icon-wodejuhuasuan",link:"/animate"},
        ],
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

<style lang="sass">
  @import "./assets/css/base.scss";
  body{
    background-color: #f8f8f8;
    position: relative;
    padding-bottom: pxToRem(100);
  }
</style>

<style lang="sass" scoped>

  @import "./assets/css/_ignore/mixin";
  @include DPR(".footer ul li i.iconfont",18px);

  .footer{
    $H:pxToRem(100);
    position: fixed;
    width: 100%;
    height: $H;
    bottom: 0;
    left:0;
    background-color: #fff;
    ul{
      height: 100%;
      display: flex;
      display: -webkit-flex;
      border-top:1px solid #e8e8e8;
      li{
        flex:1;
        .router-link-active{
          i,p{
            color:#f93;
          }
        }
        img{
          $size:pxToRem(40);
          width: $size;
          height: $size;
          margin:pxToRem(10) 0;
        }
        i.iconfont{
          display: block;
          margin:pxToRem(10) auto;
        }
        p{
          line-height: pxToRem(40)
        }
      }
    }
  }
</style>
