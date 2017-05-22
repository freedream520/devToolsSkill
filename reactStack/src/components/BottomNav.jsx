import React,{Component} from "react";
import {Link,NavLink} from "react-router-dom";

import bottomNav from "../assets/css/BottomNav.scss";

// 使用NavLink可以高量化显示
export default class BottomNav extends Component{
	constructor(props){
		super(props);
		this.state={
			navs:[
				{to:"/",text:"首页"},
				{to:"/index/tender",text:"理财"},
				{to:"/index/me",text:"我的"},
			]
		};
	}
	render() {
		console.log("match:",this.props.match);
		var navs=this.state.navs.map(function(nav,i){
			return (
				<li key={nav.text}>
					<NavLink  to={nav.to} activeClassName={bottomNav.active}>{nav.text}</NavLink>
				</li>
			);
		});
		return (
			<div className={bottomNav.wraper}>
				<ul >
					{navs}
				</ul>
			</div>
		);
	}
}