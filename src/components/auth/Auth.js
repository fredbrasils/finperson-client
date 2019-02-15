import React, { Component } from 'react';
import '../../css/finperson.min.css';
import SignUp from './SignUp';
import Login from './Login';
import {Switch, Route } from 'react-router-dom';
import Notfound from '../../notfound';

export default class Auth extends Component {

    render(){

        return (
            <div className="bg-gradient-primary">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-5">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-12">
                                            <Switch>
                                                <Route path="/auth/login" component={Login} />
                                                <Route path="/auth/signup" component={SignUp} />
                                                <Route component={Notfound} />
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}