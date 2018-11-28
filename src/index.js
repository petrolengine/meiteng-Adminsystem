import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import Users from './components/Users';

ReactDOM.render(
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME} >
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Users" component={Users} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
