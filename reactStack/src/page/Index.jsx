import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

import Bundle from 'util/bundle.jsx';


import Home from "page/Home.jsx";
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


export default class Index extends Component{
	constructor(props){
		super(props);
	}
	render() {
		
		return (
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/index" component={Home} />
				<Route  path="/index/tender"  component={Tender} />
				<Route  path="/index/me" component={Me} />

				<BottomNav />
			</div>
		);
	}
}