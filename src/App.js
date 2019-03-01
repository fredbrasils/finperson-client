import React, { Component } from 'react';
import './css/finperson.min.css';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Category from './components/category/Category';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    
    return (
      
      <div id="wrapper">
        
        <Menu/>
        
        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <Header/>

            <Switch>
                <Route path="/dashboard"
                    render={props => <Dashboard {...this.props} {...props} />}/>
                <Route path="/category"  
                    render={props => <Category  {...this.props} {...props} />}/>
            </Switch>

          </div>

          <Footer/>

        </div>


      </div>
    );
  }
}

export default App;
