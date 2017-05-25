import {SUM_ADD,SUM_UPDATE} from "../constance/consts.js"


function sum(state=(sessionStorage.getItem("sum")||0)*1,action){
    switch (action.type){
        case SUM_ADD:
	        var sum=state+action.sum;
	        sessionStorage.setItem("sum",sum);
            return state+action.sum;
        case SUM_UPDATE:
	        sessionStorage.setItem("sum",action.sum);
            return action.sum;
        default:
            return state;
    }
}

export default sum;


