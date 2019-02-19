import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApi from '../../business/AuthApi';

export default class Login extends Component {

    confirmRegistration(token){  
  
        if(token !== undefined && token !== null && token !== '') {
            const requestInfo = {token:token};
            this.props.store.dispatch(AuthApi.confirmRegistration(requestInfo));
        } 
    }

    componentDidMount(){
        this.confirmRegistration(this.props.match.params.token);
    }

    login(event){
        event.preventDefault();

        const requestInfo = {password:this.password.value,email:this.email.value};
        this.props.store.dispatch(AuthApi.login(requestInfo));
    }

    cleanMessage(){
        this.props.store.dispatch(AuthApi.cleanMessage());
    }

    render(){
        return (
            <div>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Login</h1>
                </div>
                <form className="user" onSubmit={this.login.bind(this)}>
                    <div className="form-group">
                        <input type="email" ref={(input) => this.email = input} className="form-control form-control-user" 
                            id="exampleInputEmail" aria-describedby="emailHelp" 
                            placeholder="Enter Email Address..." />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={(input) => this.password = input} 
                            className="form-control form-control-user" id="exampleInputPassword" 
                            placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="btn btn-primary btn-user btn-block" />
                    
                    <hr/>
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </a>
                </form>
                <hr/>
                <div className="text-center">
                    <Link className="small" to="/auth/resetpassword" onClick={this.cleanMessage.bind(this)}>Forgot Password?</Link>
                </div>
                <div className="text-center">
                    <Link className="small" to="/auth/signup" onClick={this.cleanMessage.bind(this)}>Create an Account</Link>
                </div>
            </div>
        );
    }
}