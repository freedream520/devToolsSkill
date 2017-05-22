import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

import Bundle from 'util/bundle.jsx';


import Index from "page/Index.jsx";
// import Tender from "page/Tender.jsx";
import Me from "page/Me.jsx";
import BottomNav from "components/BottomNav.jsx";


const TenderContainer =require('bundle-loader?lazy&name=app-[name]!page/Tender.jsx');


const Tender = () => (
    <Bundle load={TenderContainer}>
        {(Tender) => <Tender />}
    </Bundle>
)


// <a href="http://www.cnblogs.com/cocoliu/p/6743330.html">详细使用</a>

//静态页面可以使用这种方式


export default class Home extends Component{
	/**
		组件会默认把props数据对象传递进来  pros上面可以有任何属性 
		因为用了router   组件上面会绑定特定的属性   如location match history等   所以会有解构取参数的情况
		如果组件不是通过路由的方式引用，那么久得不到match等参数  如bottomNav组件是一个空对象
	**/
		
	constructor(props){
		super(props);
	}
	componentWillMount() {
		console.log("componentWillMount:",this.props);
	}
	render() {
		var obj={
			pathname:"/test",
			state:{
				modal:true
			}
		};
		return (
			<div>
				<Route exact path="/index" component={Index} />
				<Route  path="/index/tender"  component={Tender} />
				<Route  path="/index/me" component={Me} />

				<BottomNav test={"aaa"}/>
			</div>
		);
	}
}