import React,{Component} from "react";

import {Route,Link} from "react-router-dom";

export default class App extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div >
			  <h1> Me!</h1>
			  <Link to="/login">点击登录</Link>
			</div>
		)
	}
};