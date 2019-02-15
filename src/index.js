import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Auth from './components/auth/Auth'
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';
import App from './App';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/auth" component={Auth} />
            <Route component={Notfound} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
