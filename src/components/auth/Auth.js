import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import UpdatePassword from './UpdatePassword';
import {Switch, Route, withRouter } from 'react-router-dom';
import Loading from '../spinner/Loading';
import Notfound from '../../notfound';

class Auth extends Component {

    constructor(props){
        super(props);        
        this.state = {response:{success:'', message:[], redirect:false, url:'', loading:false}};
    }

    componentWillMount(){
        this.props.store.subscribe( () => {
            const resp = this.props.store.getState().auth;
            this.setState({response:resp});
            if(resp.redirect){
                this.props.history.push(resp.url);
            }
        });
    }

    showLoading(){
        let state = Object.assign({}, this.props.store.getState().auth, {loading:true});
        this.setState({response:state});
    }

    loading(){
        return this.state.response.loading;
    }

    render(){
        return (
            <div className="bg-gradient-primary">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-5">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Loading loading = {this.loading.bind(this)} {...this.props}/>
                                            <div className="p-5"> 
                                                { (this.state.response.message && this.state.response.message.length > 0) &&
                                                    <div className={ this.state.response.success ? 'alert alert-primary' : 'alert alert-danger'} role="alert">
                                                        <ul>{this.state.response.message.map(msg => (<li key={msg}>{msg}</li>))}</ul>
                                                    </div>
                                                }
                                                <Switch>
                                                    <Route path="/auth/login/:token"
                                                        render={props => <Login showLoading={this.showLoading.bind(this)} {...this.props} {...props} store={this.props.store}/>}/>
                                                    <Route path="/auth/login"  
                                                        render={props => <Login showLoading={this.showLoading.bind(this)} {...this.props} {...props} store={this.props.store}/>}/>
                                                    <Route path="/auth/signup" 
                                                        render={props => <SignUp showLoading={this.showLoading.bind(this)} store={this.props.store}/>}/>
                                                    <Route path="/auth/resetpassword/:token/:id" 
                                                        render={props => <ForgotPassword showLoading={this.showLoading.bind(this)} {...this.props} {...props} store={this.props.store}/>}/>    
                                                    <Route path="/auth/resetpassword" 
                                                        render={props => <ForgotPassword showLoading={this.showLoading.bind(this)} {...this.props} {...props} store={this.props.store}/>}/>
                                                    <Route path="/auth/updatepassword" 
                                                        render={props => <UpdatePassword showLoading={this.showLoading.bind(this)} dados={this.state.response} store={this.props.store}/>}/>
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
            </div>
        );
    }
}

export default withRouter(Auth)