import *  as consts from "../constance/consts.js"

export function sumAdd(sum){
	return {
		type:consts.SUM_ADD,
		sum:sum
	}
}


export function todoAdd(text){
	return {
		type:consts.TODO_ADD,
		text:text
	}
}