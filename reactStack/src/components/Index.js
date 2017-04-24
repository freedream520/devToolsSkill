import React,{Component} from "react";
import {Link} from "react-router";
import ind from "../assets/css/index.scss";


export default class App extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className={ind.wraper}>
			  	{this.props.children}
			  	<ul className={ind.bottomNav}>
			  		<Link to="/react" className={ind.a}>react</Link>
			  		<Link to="/about" >about</Link>
			  	</ul>
			</div>
		);
	    
	}
}