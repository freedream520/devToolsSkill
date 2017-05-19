import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

 

import ReactCom from "./ReactCom.js";
import AppCss from "../assets/css/app.scss";

// <a href="http://www.cnblogs.com/cocoliu/p/6743330.html">详细使用</a>

//静态页面可以使用这种方式


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
				<Route exact path={`${this.props.match.url}`} render={() => (
			      <h3>请选择一个主题。</h3>
			    )}/>
			    <Route exact path={`${this.props.match.url}`} component={Home} />
				<Route  path={`${this.props.match.url}react`} component={Home} />

				<ul className={AppCss.wraper}>
					<li><Link  to={this.props.match.url+"react"} >react</Link></li>
					<li><Link  to="/about" >about</Link></li>
				</ul>
			</div>
		);
	}
}