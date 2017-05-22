import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Router,HashRouter,Match, Route,Link,hashHistory,IndexLink} from 'react-router-dom';


import Home from "page/Home.jsx";
import About from "page/About.jsx";
import Login from "page/Login.jsx";

import "./assets/css/base.scss";


// 如果某路径下有嵌套渲染，则该路径不能使用exact   否则不会依次匹配树形的路由结构


/**
1 默认组件  如何重定向             
2 异步按需加载                     ：参考Home中Tender的引用
3.路由中如何给组件传递参数
4.如何调试
5.如何代理网络请求
6.react-router的路由地址 必须嵌套才可以用？  index的子路由  必须在index下面？

**/

render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route  path="/index" component={Home} />
            <Route  path="/about" component={About} />
            <Route  path="/login" component={Login} />
        </div>
    </HashRouter>,
document.getElementById('app'));
