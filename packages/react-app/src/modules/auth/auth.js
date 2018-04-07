import React from "react";
import "./auth.scss";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import {BasicHome} from "../home/home";
import {WrappedNornamLoginForm} from "../login/login";

const AuthExample =()=>(
    <Router>
        <div className="container">
            {/*<BrowserRouter forceRefresh="true"/>*/}
            <Route exact path="/" component={WrappedNornamLoginForm}/>
            {/*<Route path="/sidebar" component={SiderBar}/>*/}
            <Route path="/home" component={BasicHome}/>
        </div>
    </Router>
);

export default AuthExample;