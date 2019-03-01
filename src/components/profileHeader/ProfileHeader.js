import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { collapse: false };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ collapse: false });
        }
    }

  render() {
    
    return (
        
        <li ref={this.setWrapperRef}  className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" 
                onClick={this.toggle.bind(this)} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            </a>
            <div className={this.state.collapse ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show" : "dropdown-menu dropdown-menu-right shadow animated--grow-in"} aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout
                </a>
            </div>
        </li>

    );
  }
}

export default ProfileHeader;
