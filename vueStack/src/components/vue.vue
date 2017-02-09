
<template>
  <div class="main-cont">
    <h4 v-text="title"></h4>
    <dl>
      <dt>vuex</dt>
      <dd> 1.vuex中的数据需要在组件的computed中引用</dd>
      <dd> 2.vuex的count数据：<span v-text="count"></span></dd>
      <dd v-on:click="add">3.点击添加vuex的count数据</dd>
    </dl>
    <dl>
      <dt>常见的组件</dt>
      <dd>1.区域滚动：better-scroll（可以使用npm install的方式安装）</dd>
      <dd>2.无限滚动</dd>
      <dd>3.滑动组件（swiper组件，有非zepto和jquery的独立版本，实现轮播和栅格滑动）</dd>
      <dd>4.日历组件</dd>
      <dd>5.区域联动组件</dd>
      <dd>6.表单校验（vue-validator）</dd>
      <dd>7.ui组件 Mint-ui</dd>
    </dl>
    <p v-text="userName"></p>
    <h4>区域滚动Y（兼下拉刷新）</h4>
    <div class="area-scroll" id="scrollY">
      <ul>
        <li v-for="item in items" v-text="item.name"></li>
      </ul>
      <p class="title text-center" ref="ytitle" v-text="refreshText"></p>
      <!-- <p>加载更多</p> -->
    </div>
    <h4>区域滚动X</h4>
    <div class="area-scroll" id="scrollX">
      <ul class="x">
        <li v-for="item in items" v-text="item.name"></li>
      </ul>
    </div>

    <h4>表单校验</h4>
    <div class="validator-area" id="validatorArea">
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  //probeType 1 scroll事件会截流 2 scroll事件实实更新 3
  export default {
    data:function(){
      return {
        title:"首页",
        refreshText:"下拉刷新",
        refreshing:false,
        items:[]
      }
    },
    methods:{
      add(){
        this.$store.commit("ADD",2);
      },
      refreshData:function(){
        var self=this;
        var name="刷新的数据  "+(this.items.length+1);
        this.items.push({name:name});
        this.refreshing=false;
        self.refreshText="下拉刷新";

        self.$nextTick(function(){
          self.refreshing=false;
          self.scrollY.refresh();
        });

      },
      createScrollY:function(){
        var self=this;
        var scrollDomY=document.getElementById("scrollY");
        var titleH=80;

        let scrollY=self.scrollY = new BScroll(scrollDomY, {//options
          startX: 0,
          startY: 0,
          probeType:3,//
        });

        var pos_y=0;
        //如何确保一次scroll只更新一次数据？
        
        scrollY.on("scroll",function(pos){
          
          var y=pos_y=pos.y;
          
        });
        scrollDomY.addEventListener("touchend",function(){
          if(pos_y>titleH&&!self.refreshing){
            self.refreshText="刷新中. . .";
            self.refreshing=true;
            self.refreshData();
            
          }
        });
        scrollY.on("scrollEnd",function(pos){
         
        });
      },
      createScrollX:function(){
        var scrollDomX=document.getElementById("scrollX");
        let scrollX = new BScroll(scrollDomX, {//options
          startX: 0,
          startY: 0,
          scrollY:false,
          scrollX:true
        });

      },
    },
    created:function(){
      let count=10;
      for(var i=0;i<count;i++){
        var name="区域滚动"+i+"--"+Math.round(Math.random()*100);
        this.items.push({name:name});
      }
    },
    mounted:function(){
      this.createScrollY();//生成Y轴方向的滚动区域
      this.createScrollX();//生成X轴方向的滚动区域

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
  @import "../assets/css/_ignore/mixin.scss";
  @include dpr("#scroll",12);

  .main-cont{
    padding:pxToRem(20);
  }
  dl{
    dt{
      line-height: pxToRem(60);
    }
    dd{
      line-height: pxToRem(40);
    }
  }
  .area-scroll{
    $itemH:pxToRem(60);
    border:1px solid #f93;
    height: $itemH * 5;
    @include boxSizing(border-box);
    overflow: hidden;
    position: relative;
    background-color: #fff;
    .title{
      position: absolute;
      top:0;
      left:0;
      z-index: 1;
      width: 100%;
      line-height: pxToRem(80);
      height:pxToRem(80);
    }
    ul{
      position: relative;
      z-index: 2;
      background-color: #fff;
    }
    li{
      border-top:1px solid #e8e8e8;
      line-height: $itemH;
      text-indent: pxToRem(40);
      @include boxSizing(border-box);
      &:first-child{
        border-top:0;
      };
    }
    .x{
      width: 800px;
      li{
        display: inline-block;
        width: 200px;
      }
    }
  }
</style>
