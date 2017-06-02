import React,{Component} from "react";
import { connect } from 'react-redux';
import {sumAdd,sumUpdate} from "actions"

import BottomNav from "components/BottomNav.jsx";
import redux from "../assets/css/Redux.scss";



//通过connect 处理组件后，组件中的props可以接收到dispatch参数
class Sum extends Component{
	constructor(props) {
		super(props);
		this.state={
			num1:this.props.sum,
			num2:0
		}
		console.log(this)
	}
	addNum1(e){
		let self=this;
		this.setState({num1:this.state.num1+=1});
		this.props.dispatch(sumUpdate(self._computedSum()));
		
	}
	addNum2(e){
		let self=this;
		this.setState({num2:this.state.num2+=1});
		this.props.dispatch(sumUpdate(self._computedSum()));
	}
	_computedSum(){

		var sum=this.state.num1+this.state.num2;
		// console.log("sum:",sum)
		return sum;
	}
	render() {

		var state=this.state;
		var _this=this;
		return (
			<p className={redux.sumWraper}>
				子组件Sum：
				<span onClick={(e)=>_this.addNum1(e)}>{state.num1}</span>+
				<span onClick={(e)=>_this.addNum2(e)}>{state.num2}</span>=
				<span>{this._computedSum()}</span>
			</p>
		);
	}	
}
Sum=connect((store) => ({store:store}))(Sum);


// 使用NavLink可以高量化显示
class Redux extends Component{
	constructor(props){
		super(props);
		this.state={
			sum:this.props.store.sum,
		};
		console.log("a:",this)
	}
	componentWillMount() {
		var xhr=new XMLHttpRequest();
		xhr.open("get","/api/testXHR");
		xhr.setRequestHeader('X-Custom-Header', 'value',true);
		xhr.send({
			a:123
		});
		xhr.onreadystatechange=function(state){
			console.log(state);
			if(xhr.readyState ==4){

			}
		}
		// xhr.on("data",function(data){
		// 	console.log("data:",data)
		// });
	}
	render() {
		let state=this.state;
		const {sum}=this.props.store;
		console.log("sum:"+sum);
		return (
			<div className={redux.redux_wraper} >
				<ul className={redux.redux_ul}>
					<li>
						1.redux和react没有关系，通过编写reducer   通过redux中的createStore和combineReducers既可以生成store <br />  然后通过store.getState()获取数据  通过store.dispacth(action)更新数据
					</li>
					<li>
						2.通过react-redux 中的Provider和connect可以把store数据传递到组件中，使用了connect处理后的组件会接收dispatch参数在props中
					</li>
					<li>
						3.connect其实是一个中间件  负责把数据导入到props里面  <br /> 
						可以把store包装到一个对象中传递给props  这样render中的绑定就会动态
					</li>
				</ul>
				<div className={redux.testWraper}>
					<p>父组件sum:{this.props.store.sum}</p>
					<Sum  sum={state.sum} />
					<Sum  sum={this.props.store.sum} />
					<Sum  sum={sum} />
				</div>
				<BottomNav />
			</div>
		);
	}
};

//通过这种方式传递store会导致props不能传递和store里面一样的字段
// connect((store) => ({store:store}))(Redux);  负责把store传递到组件的props上


export default Redux=connect((store) => ({store:store}))(Redux);




