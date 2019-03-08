import React, { Component } from 'react';
import  ColorPicker  from '../../util/ColorPicker';
import {getFontAwesomeBy} from '../../util/FontAwesome';
import '../../css/dropdown.css';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

  render() {
    
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Category</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card o-hidden border-0 shadow-lg my-1">
                        <div className="card-body p-4">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control" id="name" placeholder="Category's name"/>
                                </div>
                                <div className="col-1">
                                    <button type="submit" className="btn btn-primary my-1">Submit</button>
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="card shadow mb-4">
                                <div className="d-block card-header border-left-primary py-3">
                                    <div className="row align-items-center">
                                        
                                        <ColorPicker  />

                                        <div className="col-auto">
                                            <div className="dropdown-fontawesome">
                                                <button onClick={this.toggle.bind(this)} className="dropbtn dropdown-toggle"><i className="fab fa-500px fa-2x"></i></button>
                                                <div id="myDropdown" className={this.state.collapse ? "dropdown-content-input show" : "dropdown-content-input"}>
                                                    <input type="text" maxlength="12" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
                                                </div>
                                                <div id="myDropdown" className={this.state.collapse ? "dropdown-content show" : "dropdown-content"}>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                    <a href="#about"><i className="fab fa-500px"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-4 mr-auto">
                                            <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-400"></i>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fab fa-500px"></i>
                                        </div>
                                    </div>    
                                </div>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                    This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
                                    <i className="fab fa-500px fa-2x text-gray-400"></i>
                                    
                                                    
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

export default Category;






