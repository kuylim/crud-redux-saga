import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from './components/app';
import Home from './components/home';
import User_login_success from './components/user_login_success';
import Translator_login_success from './components/translator_login_success';
import UserList from './container/user_list';
import UserEdit from './container/user_edit';
// build the router

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path= "/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home}/>
            <Route path="/user" component={User_login_success}/>
            <Route path="/translator" component={UserList}/>
            <Route path= "/edit(/:id)" component={UserEdit}/>
        </Route>
  </Router>
);

// export
export { router };
