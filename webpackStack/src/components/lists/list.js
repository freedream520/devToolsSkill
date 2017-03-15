import listTpl from "./list.tpl";
import "./list.scss";

export default function Lists(data){
	this.data=data;
	this.html=listTpl(data);
}