// import template from "template";
import $ from "zepto";
import "./header.scss"
import tpl from "./header.ejs";
console.log(tpl);
export default function Header(data){
	this.title=data;
	this.tpl=tpl(data);
}