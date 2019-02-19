import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApi from '../../business/AuthApi';

export default class SignUp extends Component {

    signup(event){
        event.preventDefault();

        const requestInfo = {firstName:this.firstName.value,
                              lastName:this.lastName.value,
                                 email:this.email.value,
                              password:this.password.value,
                      matchingPassword:this.matchingPassword.value};

        this.props.store.dispatch(AuthApi.signup(requestInfo));        
    }

    cleanMessage(){
        this.props.store.dispatch(AuthApi.cleanMessage());
    }
    
    render(){
        return (
            <div> 
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={this.signup.bind(this)}>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" ref={(input) => this.firstName = input} 
                                className="form-control form-control-user" id="firstname" 
                                placeholder="First Name"/>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" ref={(input) => this.lastName = input} 
                                className="form-control form-control-user" id="lastName" 
                                placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" ref={(input) => this.email = input} 
                            className="form-control form-control-user" id="email" placeholder="Email Address"/>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" ref={(input) => this.password = input} 
                                className="form-control form-control-user" id="password" placeholder="Password"/>
                        </div>
                        <div className="col-sm-6">
                            <input type="password"  ref={(input) => this.matchingPassword = input}  
                                className="form-control form-control-user" id="matchingPassword" 
                                placeholder="Repeat Password"/>
                        </div>
                    </div>
                    <input type="submit" value="Register Account" className="btn btn-primary btn-user btn-block" />

                    <hr/>
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Register with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                    </a>

                </form>
                <hr/>
                <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div className="text-center">
                    <Link className="small" to="/auth/login" onClick={this.cleanMessage.bind(this)}>Already have an account? Login!</Link>
                </div>
            </div>
        );
    }
}