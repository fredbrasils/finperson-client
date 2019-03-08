import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Auth from './components/auth/Auth'
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {auth} from './reducers/auth';
import {category} from './reducers/category';
import {isAuthenticated} from './util/APIUtils';

const reducers = combineReducers({auth,category});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} store={store}/>
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

const routing = (
    <Router>
        <Switch>
            <Route path="/auth" render={props => <Auth store={store}/>} />
            <PrivateRoute path="/" component={App} />
            <Route component={Notfound} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
const mapStateToProps = store => {
    return {response: store.auth}
  };

  const mapDispatchToProps = dispatch => {
      return {
          action : (parametro) => {
            dispatch(AuthApi.action);
          },
          outraAction : (parametro) => {
            dispatch(AuthApi.outraAction);
          }
      }
  }
   
  //bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps)(Auth);

*/