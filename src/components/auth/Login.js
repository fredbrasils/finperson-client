import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../util/APIUtils';

export default class Login extends Component {

    constructor(props){
        super(props);        
        this.state = {errors:''};
        console.log(props);
        console.log(props.match.params.token);
        
    }

    envia(event){
        event.preventDefault();

        //const {url} = this.props.match;
        const requestInfo = {password:this.password.value,email:this.email.value};

        login(requestInfo)
            .then(response => {
                console.log("sucesso",response);
                return response;
            }).catch(error => {
                //this.setState({errors:error.message});
                //console.log(error.message);
                console.log(error);
                this.props.history.push('/auth/signup')
            });

                /*
       login(requestInfo)
            .then(response => {
                if(response.ok) {
                    
                } else {
                    console.log("error");
                    throw new Error('não foi possível fazer o login');
                }
            })
            .then(token => {
                console.log("pegou token");
                localStorage.setItem('auth-token',token);
                //browserHistory.push('/home');
            })
            .catch(error => {
                console.log("entrou no catch do error");
                url.push('/home');
                //browserHistory.push('/home');
                //this.setState({msg:error.message});
            });
            */
    }

    render(){
        return (
            <div>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Login</h1>
                </div>
                <form className="user" onSubmit={this.envia.bind(this)}>
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
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div className="text-center">
                    <Link className="small" to="/auth/signup">Create an Account</Link>
                </div>
            </div>
        );
    }
}