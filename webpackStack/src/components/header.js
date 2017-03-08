// import template from "template";
import tpl from "./header.ejs";
console.log(tpl);
export default function Header(data){
	this.title=data;
	this.tpl=tpl(data);
}