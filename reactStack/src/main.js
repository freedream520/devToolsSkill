import React from "react";
import {render} from "react-dom";
import {BrowserRouter , Router,HashRouter,Match, Route,Link,hashHistory,IndexLink} from 'react-router-dom';

import App from "./components/App.js";
import Index from "./components/Index.js";
import ReactC from "./components/ReactC.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import "./assets/css/base.scss";

let rootElement=document.getElementById('app');


render(
    <HashRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/react" component={ReactC} />
            <Route exact path="/about" component={About} />
        </div>
        
    </HashRouter>,
rootElement);
