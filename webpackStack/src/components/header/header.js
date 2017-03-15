// import template from "template";
import "./header.scss"
import tpl from "./header.ejs";
export default function Header(data){
	this.title=data;
	this.tpl=tpl(data);
}