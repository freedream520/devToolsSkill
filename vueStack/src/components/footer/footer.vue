<template>
	<div class="footer">
		<ul>
			<li v-for="nav in items" class="text-center">
				<img src="">
				<p v-text="nav.text"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		data:function(){
			return {
				items:[
					{text:"首页",link:"",icon:""},
					{text:"理财",link:"",icon:""},
					{text:"发现",link:"",icon:""},
					{text:"我的",link:"",icon:""},
				],
				count:this.$store.state.count
			}
		},
		methods:{
			add:function(){
				alert("click");
				this.$store.commit("add");
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "../../assets/css/_ignore/mixin";

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
				img{
					$size:pxToRem(40);
					width: $size;
					height: $size;
					margin:pxToRem(10) 0;
				}
				p{
					line-height: pxToRem(40)
				}
			}
		}
	}
</style>