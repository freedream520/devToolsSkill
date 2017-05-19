import React,{Component} from "react";
import {Link} from "react-router-dom";

import bottomNav from "../assets/css/BottomNav.scss";


export default class BottomNav extends Component{
	constructor(props){
		super(props);
		// this.state={
		// 	navs:[
		// 		{text:"react",to:"/react"},
		// 		{text:"redux",to:"/redux"},
		// 	]
		// }
	}
	render() {
		console.log("match:",this.props.match);
		return (
			<div className={bottomNav.wraper}>
				<ul >
					<li><Link  to="/" >首页</Link></li>
					<li><Link  to="/index/tender" >理财</Link></li>
					<li><Link  to="/index/me" >我的</Link></li>
				</ul>
			</div>
		);
	}
}