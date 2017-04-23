import React,{Component} from "react";
import {Link} from "react-router";
import "../assets/css/app.scss";

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id="app12">
			  	{this.props.children}
			  	<ul>
			  		<Link to="/react" >react</Link>
			  		<Link to="/about" >about</Link>
			  	</ul>
			</div>
		);
	    
	}
}