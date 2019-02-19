import React, { Component } from 'react';
import '../../css/finperson.min.css';
import SignUp from './SignUp';
import Login from './Login';
import {Switch, Route, withRouter } from 'react-router-dom';
import Notfound from '../../notfound';

class Auth extends Component {

    constructor(props){
        super(props);        
        this.state = {response:{success:'', message:[], redirect:false, url:''}};
    }

    componentWillMount(){
        this.props.store.subscribe( () => {
            const resp = this.props.store.getState();
            this.setState({response:resp});
            if(resp.redirect){
                this.props.history.push(resp.url);
            }
        });
    }

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
                                            <div className="p-5"> 
                                                { (this.state.response.message !== null && this.state.response.message.length > 0) &&
                                                    <div className={ this.state.response.success ? 'alert alert-primary' : 'alert alert-danger'} role="alert">
                                                        <ul>{this.state.response.message.map(msg => (<li key={msg}>{msg}</li>))}</ul>
                                                    </div>
                                                }
                                                <Switch>
                                                    <Route path="/auth/login/:token"
                                                        render={props => <Login  {...this.props} {...props} store={this.props.store}/>}/>
                                                    <Route path="/auth/login"  
                                                        render={props => <Login  {...this.props} {...props} store={this.props.store}/>}/>
                                                    <Route path="/auth/signup" 
                                                        render={props => <SignUp store={this.props.store}/>}/>
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