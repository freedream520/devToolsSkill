// import template from "template";
import "../style/base.scss";
import $ from "zepto";

import tpl from "./header.ejs";
console.log(tpl);
export default function Header(data){
	this.title=data;
	this.tpl=tpl(data);
}