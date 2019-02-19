import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApi from '../../business/AuthApi';

export default class ForgotPassword extends Component {

    resetPassword(event){
        event.preventDefault();

        const requestInfo = {email:this.email.value};
        this.props.store.dispatch(AuthApi.resetPassword(requestInfo));
    }

    cleanMessage(){
        this.props.store.dispatch(AuthApi.cleanMessage());
    }

    render(){
        return (
            <div>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                </div>
                <form className="user" onSubmit={this.resetPassword.bind(this)}>
                    <div className="form-group">
                        <input type="email" ref={(input) => this.email = input} className="form-control form-control-user" 
                        id="email" aria-describedby="emailHelp" 
                        placeholder="Enter Email Address..."/>
                    </div>
                    <input type="submit" value="Reset Password" className="btn btn-primary btn-user btn-block" />
                </form>
                <hr/>
                <div className="text-center">
                    <Link className="small" to="/auth/signup" onClick={this.cleanMessage.bind(this)}>Create an Account</Link>
                </div>
                <div className="text-center">
                    <Link className="small" to="/auth/login" onClick={this.cleanMessage.bind(this)}>Already have an account? Login!</Link>
                </div>
            </div>
        );
    }
}