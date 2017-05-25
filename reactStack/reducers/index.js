

import {createStore,combineReducers} from "redux";

import sum from "./sum.js";
import todo from "./todo.js";

var reducers =combineReducers({sum,todo});

// var store=createStore();//store中的键值名称取决于传递的变量名

export default reducers;

