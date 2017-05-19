import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Router,HashRouter,Match, Route,Link,hashHistory,IndexLink} from 'react-router-dom';


import Index from "page/Index.jsx";
import About from "page/About.jsx";
import Login from "page/Login.jsx";

import "./assets/css/base.scss";


// 如果某路径下有嵌套渲染，则该路径不能使用exact   否则不会依次匹配树形的路由结构
// 1 默认组件  2 异步按需加载

render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Index} />
            <Route  path="/index" component={Index} />
            <Route  path="/about" component={About} />
            <Route  path="/login" component={Login} />
        </div>
    </HashRouter>,
document.getElementById('app'));
