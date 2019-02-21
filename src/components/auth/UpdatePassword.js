import React, { Component } from 'react';
import AuthApi from '../../business/AuthApi';

export default class UpdatePassword extends Component {

    constructor(props){
        super(props);        
        this.dados = this.props.dados;
    }

    updatePassword(event){
        event.preventDefault();
        const requestInfo = {       id:this.dados.user.id,
                                 token:this.dados.token,
                             firstName:this.dados.user.firstName,
                              lastName:this.dados.user.lastName,
                                 email:this.dados.user.email,
                              password:this.password.value,
                      matchingPassword:this.matchingPassword.value};

        this.props.store.dispatch(AuthApi.updatePassword(requestInfo));        
    }

    redirectLogin(dados){  
  
        if(dados.user === undefined || dados.user === null || dados.user === '') {
            this.props.store.dispatch(AuthApi.redirectLogin());
        } 
    }

    componentDidMount(){
        this.redirectLogin(this.dados);
    }
    
    render(){
        return (
            <div>{
                (this.dados.user !== undefined) &&            
                <div>
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Update your password!</h1>
                    </div>
                    <form className="user" onSubmit={this.updatePassword.bind(this)}>
                        <fieldset disabled>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" defaultValue={this.dados.user.firstName} 
                                        className="form-control form-control-user" id="firstname" 
                                        placeholder="First Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" defaultValue={this.dados.user.lastName} 
                                        className="form-control form-control-user" id="lastName" 
                                        placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" defaultValue={this.dados.user.email} 
                                    className="form-control form-control-user" id="email" placeholder="Email Address"/>
                            </div>
                        </fieldset>
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
                        <input type="submit" value="Update Password" className="btn btn-primary btn-user btn-block" />
                    </form>
                </div>
                }
            </div>
        );
    }
}