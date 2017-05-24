import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

import axios from "axios";

import index from "../assets/css/Index.scss";
import BottomNav from "components/BottomNav.jsx";
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


class Tips extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<ul>
				<h4>注意事项：</h4>
				<li>
					1.如果数据依赖于老的数据，setState可以传递一个函数，该函数接受两个参数 prevState props  取数据的时候通过prevState而不是this.state
				</li>
				<li>
					2.React中实现类似于计算属性需要绑定一个函数  该函数可以返回计算后的结果
				</li>
			</ul>
		);
	}
}

class Sum extends Component{
	constructor(props) {
		super(props);

		this.state={
			num1:this.props.sum,
			num2:0
		}
	}
	addNum1(e){
		console.log(e,this);
		this.setState({num1:this.state.num1+=1});
		this.props.onUpdateSum(sum);
	}
	addNum2(e){
		this.setState((prevState,props)=>{num2:prevState.num2++});
		this.props.onUpdateSum(sum);
	}
	_computedSum(){
		var sum=this.state.num1+this.state.num2;

		return sum;
	}
	render() {

		var state=this.state;
		var _this=this;
		return (
			<p className={index.sumWraper}>
				子组件Sum：
				<span onClick={(e)=>_this.addNum1(e)}>{state.num1}</span>+
				<span onClick={(e)=>_this.addNum2(e)}>{state.num2}</span>=
				<span>{this._computedSum()}</span>
			</p>
		);
	}	
}

export default class Index extends Component{
	constructor(props){
		super(props);
		this.state= {
			count:0,
			sum:2,
			banner:[],
			lists:[]
		}
	}
	componentDidMount() {
		var _this=this;
		var count=this.state.count;

		// setInterval(function(){
		// 	_this.setState({count:_this.state.count++});
		// },1000);

		var banner="/api/banner";
		var homeListUrl="/api/homeList";

		

		axios(banner).then(function(data){
			_this.setState({
				banner:data.data.data
			});
		});


		axios(homeListUrl).then(function(data){
			_this.setState({
				lists:data.data.data.rows
			});
		});

	}
	UpdateSum(val){
		this.setState({
			sum:val
		});
	}
	render() {
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

		var state=this.state;
		return (
			<div className={index.wraper}>
				<ul>{banner}</ul>
				<ul>{lists}</ul>
				<Dev />
				<Tips />
				<div className={index.testWraper}>
					<h4>测试数据: {state.count}</h4>
					<p>父组件sum:{state.sum}</p>

					<Sum sum={state.sum} onUpdateSum={this.UpdateSum}/>
				</div>
				<BottomNav test={"aaa"}/>
			</div>
		);
	}
}