import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, browserHistory} from "react-router-dom";
import {Route} from "react-router";
import "babel-polyfill";
import Signup from "../signup";

const App = () => (
    <BrowserRouter history={browserHistory}>
        <div>
            <Route exact path="/" component={Signup}/>
        </div>
    </BrowserRouter>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
