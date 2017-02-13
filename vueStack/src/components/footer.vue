<template>
	<div class="footer">
		<ul>
			<li v-for="nav in items" class="text-center">
				<router-link :to="nav.link">
					<i class="iconfont" :class="nav.icon"></i>
					<p v-text="nav.text"></p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		data:function(){
			return {
				items:[
					{text:"首页",icon:"icon-shouye",link:"/home"},
					{text:"理财",icon:"icon-wodedingdan",link:"/finance"},
					{text:"发现",icon:"icon-wodeyouhuiquan",link:"/discovery"},
					{text:"我的",icon:"icon-wodejuhuasuan",link:"/me"},
				],
				count:this.$store.state.count
			}
		},
		methods:{
			add:function(){
				alert("click");
				this.$store.dispatch("ADD",this.$store.state);
			}
		}
	}
</script>

<style lang="sass" scoped>

	@import "../assets/css/_ignore/mixin";
	@include DPR(".footer ul li i.iconfont",18px);

	.footer{
		$H:pxToRem(100);
		position: fixed;
		width: 100%;
		height: $H;
		bottom: 0;
		left:0;
		background-color: #f92;
		
		ul{
			height: 100%;
			display: flex;
			display: -webkit-flex;
			border-top:1px solid #e8e8e8;
			li{
				flex:1;
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