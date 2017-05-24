import React,{Component} from "react";

import {Route,Link} from "react-router-dom";
import BottomNav from "components/BottomNav.jsx";

export default class App extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div >
			  <h1> Me!</h1>
			  <p>1.如何异步按需加载？</p>
			  <p>2.如何精确高亮导航？</p>
			  <p>3.如何避免css的污染问题？</p>

			  <Link to="/login">点击登录</Link>
			  <BottomNav test={"aaa"}/>
			</div>
		)
	}
};