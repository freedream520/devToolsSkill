import React,{Component} from "react";
import { Route,Link} from 'react-router-dom';

import axios from "axios";


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
			return (<li>
				<p>{item.name}</p>
			</li>);
		});

		var lists=this.state.lists.map(function(list){
			return (<li>
				<h4>{list.name}</h4>
			</li>)
		});
		return (
			<div>
				<ul>{banner}</ul>
				<ul>{lists}</ul>
			</div>
		);
	}
}