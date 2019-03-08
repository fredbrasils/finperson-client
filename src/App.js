import React, { Component } from 'react';
import './css/finperson.min.css';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Categories from './components/category/Categories';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {scrollDisplay:'inline'};
    this.handleScroll = this.handleScroll.bind(this);
  }

  scrollToTop(event){
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {

    let scrollTop = document.documentElement.scrollTop;
    
    if(scrollTop > 100){
      this.setState({ scrollDisplay: 'inline' });
    }else{
      this.setState({ scrollDisplay: 'none' });
    }
    
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
                      render={props => <Categories  {...this.props} {...props} />}/>
              </Switch>

            </div>

            <a className="scroll-to-top rounded" style={{display:this.state.scrollDisplay}} onClick={this.scrollToTop.bind(this)}>
              <i className="fas fa-angle-up"></i>
            </a>

            <Footer/>

          </div>
      </div>
    );
  }
}

export default App;
