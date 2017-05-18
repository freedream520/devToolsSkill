import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

 
import ReactC from "./ReactC.js";
import About from "./About.js";
// <a href="http://www.cnblogs.com/cocoliu/p/6743330.html">详细使用</a>
export default class App extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				
				<ul>
					<li><Link  to="/react" >react</Link></li>
					<li><Link  to="/about" >about</Link></li>
				</ul>
				<Route exact path="/react" component={ReactC} />
			</div>
		);
	}
}