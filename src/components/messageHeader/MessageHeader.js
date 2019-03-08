import React, { Component } from 'react';

class MessageHeader extends Component {

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
            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" 
                onClick={this.toggle.bind(this)} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">7</span>
            </a>
            <div className={this.state.collapse ? "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show" : "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"} aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">
                    Message Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
        </li>

    );
  }
}

export default MessageHeader;
