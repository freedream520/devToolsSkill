//创建每一个reducer  通过combineReducers 合并所有的reducer   变量通过变量表控制，不要每个地方都写死
import {createStore,combineReducers} from "redux";


function sum(state=0,action){
    switch (action.type){
        case "UPDATE":
            return action.sum;
        default:
            return state;
    }
}

function todos(state=[],action){
    switch (action.type){
        case "ADD":
             return state.concat({text:action.text,completed:false});
        default:
            return state;
    }
}


var store=createStore(combineReducers({sum,todos}));

store.subscribe(function(){
    console.log("subscribe--","state:",store.getState());
});

store.dispatch({
    type:"UPDATE",
    sum:123
});

store.dispatch({
    type:"ADD",
    text:"add somthing"
});