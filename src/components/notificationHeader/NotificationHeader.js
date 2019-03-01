import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotificationHeader extends Component {

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
        
        <li ref={this.setWrapperRef} className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" 
                onClick={this.toggle.bind(this)} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter">4+</span>
            </a>
            <div className={this.state.collapse ? "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show" : "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"} aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                    </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
        </li>

    );
  }
}

export default NotificationHeader;
