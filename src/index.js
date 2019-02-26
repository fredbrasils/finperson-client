import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Auth from './components/auth/Auth'
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {auth} from './reducers/auth';

const store = createStore(auth, applyMiddleware(thunkMiddleware));

const routing = (
    <Router>
        <Switch>
            <Route path="/auth" render={props => <Auth store={store}/>} />
            <Route path="/" component={App} />
            <Route component={Notfound} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
