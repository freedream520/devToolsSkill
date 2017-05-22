import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

import axios from "axios";



//react中任何标签都需要闭合，不然会编译报错




const o=[
	{text:"a",age:123},
	{text:"b",age:234},
];

//调试
const Dev=(props)=>(
	<ul>
		<h4>调试</h4>
		<li>
			1.github上下载 React Developer Tools  （需要翻墙）  <br />
			2.插件设置为可以访问文件 <br />
			3.控制台有react的选项   可以看到react源码
		</li>
	</ul>
);




class Test extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var arr=o.map(function(item){
			return <p key={item.text} {...item}>{item.text}</p>
		});
		return <div>{arr}</div>;
	}
}



export default class Home extends Component{
	constructor(props){
		super(props);
		this.state= {
			banner:[],
			lists:[]
		}
	}
	componentWillMount() {
		var banner="/api/banner";
		var homeListUrl="/api/homeList";

		var self=this;

		axios(banner).then(function(data){
			self.setState({
				banner:data.data.data
			});
		});


		axios(homeListUrl).then(function(data){
			self.setState({
				lists:data.data.data.rows
			});
		});
	}
	render() {
		console.log(123,this.state);
		var banner=this.state.banner.map(function(item){
			return (<li key={item.name}>
				<p>{item.name}</p>
			</li>);
		});

		var lists=this.state.lists.map(function(list){
			return (<li key={list.name}>
				<h4>{list.name}</h4>
			</li>)
		});
		return (
			<div>
				<ul>{banner}</ul>
				<ul>{lists}</ul>
				<Dev />
				<Test />
			</div>
		);
	}
}