import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    
    return (
        <ul className={this.state.collapse ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordio toggled" : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordio"} id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">FinPeson</div>
            </a>
        
            <hr className="sidebar-divider my-0" />
        
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
        
            <hr className="sidebar-divider" />
        
            <div className="sidebar-heading">
                Interface
            </div>
        
            <li className="nav-item">
                <Link className={this.state.collapse ? "nav-link collapsed toggled" : "nav-link collapsed"} 
                    to="/category">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Category</span>
                </Link>
                <div id="collapseTwo" className={this.state.collapse ? "collapse toggled" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>
        
            <hr className="sidebar-divider d-none d-md-block" />
        
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.toggle.bind(this)}></button>
            </div>
        
        </ul>
    );
  }
}

export default Menu;
