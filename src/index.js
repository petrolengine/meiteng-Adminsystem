import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, Router } from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import Regist from './components/Regist';
import Users from './components/Users';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/regist" component={Regist} />
            <Route path="/Users" component={Users} />
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
