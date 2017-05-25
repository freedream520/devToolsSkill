import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Router,HashRouter,Match, Route,Link,hashHistory,IndexLink,Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'
import {createStore} from "redux";

import Index from "page/Index.jsx";
import Home from "page/Home.jsx";
import About from "page/About.jsx";
import Login from "page/Login.jsx";
import Me from "page/Me.jsx";
import ReduxComp from "page/Redux.jsx";


import Bundle from 'util/bundle.jsx';

const TenderContainer =require('bundle-loader?lazy&name=app-[name]!page/Router.jsx');


const RouteComp = () => (
    <Bundle load={TenderContainer}>
        {(Tender) => <Tender />}
    </Bundle>
)


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


import reducers from "../reducers/index.js";
import {sumAdd,todoAdd} from "../actions/index.js";


let store=createStore(reducers);

store.subscribe(function(){
    console.log(store.getState().sum)
});




render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" render={()=>(
                    <Redirect to="/index" />
                )} />
                <Route  path="/index" component={Index} />
                <Route  path="/router"  component={RouteComp} />
                <Route  path="/me" component={Me} />
                <Route  path="/redux" component={ReduxComp} />
                <Route  path="/about" component={About} />
                <Route  path="/login" component={Login} />
            </div>
        </HashRouter>
    </Provider>,
document.getElementById('app'));
