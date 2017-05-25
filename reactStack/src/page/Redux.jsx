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
		console.log(e,this);
		this.setState({num1:this.state.num1+=1});
		this.props.dispatch(sumUpdate(self._computedSum()));
		
	}
	addNum2(e){
		this.setState((prevState,props)=>{num2:prevState.num2++});
	}
	_computedSum(){

		var sum=this.state.num1+this.state.num2;
		
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
Sum=connect((store) => (store))(Sum);


// 使用NavLink可以高量化显示
class Redux extends Component{
	constructor(props){
		super(props);
		this.state={
			sum:this.props.sum,
			// s : this.refs.s.getDomNode().innerHTML
		};
		
	}
	componentDidMount() {
		console.log("s:",this.refs.s.props.sum)
	}
	render() {
		let state=this.state;
		const {sum} = this.props;
		return (
			<div className={redux.redux_wraper} >
				<ul className={redux.redux_ul}>
					<li>
						1.redux和react没有关系，通过编写reducer   通过redux中的createStore和combineReducers既可以生成store <br />  然后通过store.getState()获取数据  通过store.dispacth(action)更新数据
					</li>
					<li>
						2.通过react-redux 中的Provider和connect可以把store数据传递到组件中，使用了connect处理后的组件会接收dispatch参数在props中
					</li>
				</ul>
				<div className={redux.testWraper}>
					<p>父组件sum:{state.sum}</p>
					<Sum ref="s" sum={state.sum} />
					<Sum  sum={sum} />
				</div>
				<BottomNav />
			</div>
		);
	}
};
const sum = (state) => {
	console.log(state)
	return {
		sum : state.sum
	}
}
//通过这种方式传递store会导致props不能传递和store里面一样的字段
export default Redux=connect(sum)(Redux);