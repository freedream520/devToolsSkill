import {TODO_ADD} from "../constance/consts.js"

function todos(state=[],action){
    switch (action.type){
        case TODO_ADD:
             return state.concat({text:action.text,completed:false});
        default:
            return state;
    }
}

export default todos;