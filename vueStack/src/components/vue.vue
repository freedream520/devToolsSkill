
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
      <dd>1.区域滚动 better-scroll</dd>
      <dd>2.无限滚动</dd>
      <dd>3.滑动组件</dd>
      <dd>4.日历组件</dd>
      <dd>5.区域联动组件</dd>
      <dd>6.表单校验</dd>
      <dd></dd>
    </dl>
    <p v-text="userName"></p>
    <h4>区域滚动</h4>
    <div class="area-scroll" id="scroll">
      <ul>
        <li v-for="item in items" v-text="item.name"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    data:function(){
      return {
        title:"首页",
        items:[]
      }
    },
    methods:{
      add(){
        this.$store.commit("ADD",2);
      }
    },
    created:function(){
      let count=20;
      for(var i=0;i<count;i++){
        var name="区域滚动"+i+"--"+Math.round(Math.random()*100);
        this.items.push({name:name});
      }
    },
    mounted:function(){
      var scrollDom=document.getElementById("scroll");
      let scroll = new BScroll(scrollDom, {//options
        startX: 0,
        startY: 0
      });
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
    height: $itemH * 10;
    @include boxSizing(border-box);
    overflow: hidden;
    li{
      border-top:1px solid #e8e8e8;
      line-height: $itemH;
      text-indent: pxToRem(40);
      @include boxSizing(border-box);
    }
  }
</style>
