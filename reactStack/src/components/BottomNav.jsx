import React,{Component} from "react";
import {Link} from "react-router";

export default class App extends Component{
	constructor(props){
		super(props);
		this.state={
			navs:[
				{text:"react",to:"/react"},
				{text:"redux",to:"/redux"},
			]
		}
	}
	render() {
		return (
			<div>
				<ul>
					<li>react</li>
				</ul>
			</div>
		);
	}
}