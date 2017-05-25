import {SUM_ADD,SUM_UPDATE} from "../constance/consts.js"


function sum(state=33,action){
    switch (action.type){
        case SUM_ADD:
            return state+action.sum;
        case SUM_UPDATE:
            return action.sum;
        default:
            return state;
    }
}

export default sum;


