(function(){

	var names=["习大大","彭麻麻","王大师","哈哈哈"];

	var Lists=React.createClass({
		getInitialState:function(){
			return {
				status:false,
				color:"#f33"
			}
		},
		handleClick:function(){
			this.setState({
				status:!this.state.status
			});
			this.setProps({
				datavalue:Math.random()
			});

			console.log(this.state);
			if(this.state.status){
				this.setState({
					color:"#3f3"
				});
			}
			else{
				this.setState({
					color:"#f33"
				});
			}
		},
		render:function(){
			return <div style={{color:this.state.color}} onClick={this.handleClick}>
			{this.props.datavalue}
			</div>;
		}
	});

	React.render(
		<div>{
				names.map(function(item,index){
					return <li>{index+1}:{item} </li>;
				})
			}
		</div>
		
	,document.getElementById("container"));


	React.render(<Lists datavalue="123" />,document.getElementById("lists"));

})();