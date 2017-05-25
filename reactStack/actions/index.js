
// sum reducer
export const SUM_ADD="SUM_ADD";
export const SUM_UPDATE="SUM_UPDATE";

// todo reducer
export const TODO_ADD="TODO_ADD";




export function sumAdd(sum){
	return {
		type:SUM_ADD,
		sum
	}
}

export function sumUpdate(sum){
	return {
		type:SUM_UPDATE,
		sum
	}
}

export function todoAdd(text){
	return {
		type:TODO_ADD,
		text
	}
}