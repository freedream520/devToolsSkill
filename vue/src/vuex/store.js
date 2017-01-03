

export default {
	computed:{
		data:function(){
			return this.$store.state.data;
		}
	},
	methods:{
		firstTest(){
			this.$store.dispatch("MUTATIONS",arguments);
		}
	}
}