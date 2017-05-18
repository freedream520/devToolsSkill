import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

 
import ReactC from "./ReactC.js";
import About from "./About.js";
// <a href="http://www.cnblogs.com/cocoliu/p/6743330.html">详细使用</a>
export default class App extends Component{
	constructor(props){
		super(props);
		console.log("props:",props);
		// console.log("match:",match);
	}
	render() {
		console.log("match:",this.props.match);
		return (
			<div>
				
				<ul>
					<li><Link  to={`${this.props.match.url}react`} >react</Link></li>
					<li><Link  to="/about" >about</Link></li>
				</ul>
				<Route exact path="{`${this.props.match.url}react`}" component={ReactC} />
			</div>
		);
	}
}