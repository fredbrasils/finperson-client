import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {

    envia(event){
        event.preventDefault();

        const requestInfo = {
            method:'POST',
            body:JSON.stringify({login:this.login.value,senha:this.senha.value}),
            headers:new Headers({
                'Content-type' : 'application/json' 
            })
        };
        
    }
    
    render(){
        return (
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" onSubmit={this.envia.bind(this)}>
                    <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" ref={(input) => this.firstname = input} 
                                class="form-control form-control-user" id="firstname" 
                                placeholder="First Name"/>
                        </div>
                        <div class="col-sm-6">
                            <input type="text" ref={(input) => this.lastName = input} 
                                class="form-control form-control-user" id="lastName" 
                                placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email" ref={(input) => this.email = input} 
                            class="form-control form-control-user" id="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" ref={(input) => this.password = input} 
                                class="form-control form-control-user" id="password" placeholder="Password"/>
                        </div>
                        <div class="col-sm-6">
                            <input type="password"  ref={(input) => this.matchpassword = input}  
                                class="form-control form-control-user" id="matchpassword" 
                                placeholder="Repeat Password"/>
                        </div>
                    </div>
                    <input type="submit" value="Register Account" className="btn btn-primary btn-user btn-block" />

                    <hr/>
                    <a href="index.html" class="btn btn-google btn-user btn-block">
                        <i class="fab fa-google fa-fw"></i> Register with Google
                    </a>
                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                    </a>

                </form>
                <hr/>
                <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div class="text-center">
                    <Link className="small" to="/auth/login">Already have an account? Login!</Link>
                </div>
            </div>
        );
    }
}