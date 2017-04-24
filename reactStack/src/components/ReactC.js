import React,{Component} from "react";
import a from "../assets/css/app.scss";

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className={a.wraper}>
			  	<h1 >react
			  		<span>span</span>
			  	</h1>

			</div>
		);
	    
	}
}