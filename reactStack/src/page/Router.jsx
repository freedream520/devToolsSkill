import React,{Component} from "react";
import {Route,Link} from "react-router-dom";
import { connect } from 'react-redux';


import BottomNav from "components/BottomNav.jsx";

//  { path: '/contact',
//   sidebar: () => <div>联系我们!</div>,
//   main: () => <h2>联系我们</h2>
// }


class App extends Component {
	constructor(props){
		super(props);
	}
	render() {
		console.log("router store:",this.props.store);
		return (
			<div >
			  	<h1> Router!</h1>
			  	<ul>
			  		<li>
			  			1.redirect
			  		</li>
			  		<li>
			  			<h3>优点：</h3>
			  			<p>
			  				一个路由下可以渲染多个不同的Route  如既可以渲染sidebar 也可以渲染main组件  这是vue难以做到的地方   vue只有一个router-view
			  			</p>
			  			
			  		</li>
			  		<li>
			  			<h3>缺点：</h3>
			  			<p>
			  				因为没有配置文件，所以父子关系是通过url进行判定  而vue-router则是通过配置文件声明父子关系，所以和url没有关系
			  				所以子路由的路径必须嵌套在父路由下面   
			  			</p>
			  		</li>
			  	</ul>
			  	<h4>store.sum:{this.props.store.sum}</h4>
			  	<BottomNav test={"aaa"}/>
			</div>
		)
	}
};

export default App = connect((store)=>({store:store}))(App);

