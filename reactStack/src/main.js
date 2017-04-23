import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, hashHistory,history} from 'react-router';


import App from "./components/App.js";
import Index from "./components/Index.js";
import ReactC from "./components/ReactC.js";
import About from "./components/About.js";
import Login from "./components/Login.js";


let rootElement=document.getElementById('app');

render(
  <Router>

    <Route path="/" component={App}>
    	<IndexRoute path="/index" component={Index} />
    	
    	<Route path="/index" component={Index} >
    		<IndexRoute path="/react" component={ReactC} />
    		<Route path="/react" component={ReactC} />
    		<Route path="/about" component={About} />
    	</Route>
    	<Route path="/login" component={Login} />

    </Route>
    
  </Router>,
rootElement);