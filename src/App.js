import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Categories from './components/category/Categories';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {classScroll:'hideScroll'};
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
      this.setState({ classScroll: 'showScroll' });
    }else{
      this.setState({ classScroll: 'hideScroll' });
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

            <a className={"scroll-to-top rounded " + this.state.classScroll} onClick={this.scrollToTop.bind(this)}>
              <i className="fas fa-angle-up"></i>
            </a>

            <Footer/>

          </div>
      </div>
    );
  }
}

export default App;
