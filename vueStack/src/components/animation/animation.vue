<template>
  <div class="wraper">
   <span class="card text-center pos-rel" :class="'card'+index" v-for="index in n" :ref="index">
     {{8 - index}}
   </span>
  </div>
</template>

<script>
  
  export default {
    data:function(){
      return {
        n:7
      }
    },
    mounted(){
      console.log(this);
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
  
  @include dpr(".card",24px);
  .wraper{
    position: relative;
    .card{
      border-radius: pxToRem(20);
      width: pxToRem(140);
      height: pxToRem(260);
      line-height: pxToRem(260);
      color: #f33;
      background-color: #f94;
      position: absolute;
      left: pxToRem(20);
      box-shadow: pxToRem(5) pxToRem(5) #d81;
      animation-duration:1.2s;
      border: pxToRem(2) solid red;
      animation-timing-function:cubic-bezier(.33,.16,.88,.54);
      animation-fill-mode:both;
    }
  }

  @for $i from 1 through 7 { 
    .card#{$i} { 
      animation-delay:$i * 20ms;
      animation-name:fly#{$i};
    }
    @keyframes fly#{$i}{
      0%{
        transform: translate3d(0,0,0);
      }
      15%{
        transform: translate3d(5rem,5rem,0)
      }
      70%{
        transform: translate3d(5rem,5rem,0)
      }
      85%{
        transform: translate3d($i * 0.08rem,10rem - $i * 0.03rem,0)
      }
      100%{
        transform: translate3d($i * 1rem,10rem,0)
      }
    }
  }


</style>
