import React,{Component} from "react";
import {Link} from "react-router";
import "../assets/css/app.scss";

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	    
	}
}