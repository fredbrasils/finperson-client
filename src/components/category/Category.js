import React, { Component } from 'react';
import  ColorPicker  from '../../util/ColorPicker';
import {getFontAwesomeBy} from '../../util/FontAwesome';
import '../../css/dropdown.css';
import reactCSS from 'reactcss';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { collapse: false, 
                       category:props.category
                    };
        this.icons = getFontAwesomeBy();
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse, category: this.state.category });
    }

    changeColor(rgb){
        const category = this.state.category;
        category.color = rgb.r+"-"+rgb.g+"-"+rgb.b+"-"+rgb.a;
        this.setState({ collapse: this.state.collapse, category});
    }

    render() {
    
        const styles = reactCSS({
            'default': {
                color: {
                    borderLeft: `0.25rem solid rgba(${this.state.category.color.split('-')[0]}, ${ this.state.category.color.split('-')[1] }, ${ this.state.category.color.split('-')[2] }, ${ this.state.category.color.split('-')[3]})`,
                },
            },
        });

        return (
            <div className="card shadow mb-4 animation-grow-in">
                <div style={styles.color} className="d-block card-header py-3">
                    <div className="row align-items-center">
                        
                        <ColorPicker color={this.state.category.color} changeColorParent ={this.changeColor.bind(this)}/>

                        <div className="col-auto">
                            <div className="dropdown-fontawesome">
                                <button onClick={this.toggle.bind(this)} className="dropbtn dropdown-toggle"><i className={this.state.category.icon + " fa-2x"}></i></button>
                                <div id="myDropdown" className={this.state.collapse ? "dropdown-content-input show" : "dropdown-content-input"}>
                                    <input type="text" maxLength="12" placeholder="Search.." id="myInput" onKeyUp="filterFunction()"/>
                                </div>
                                <div id="myDropdown" className={this.state.collapse ? "dropdown-content show" : "dropdown-content"}>
                                    {
                                        this.icons.map(icon => (
                                            <a key={icon}><i className={icon}></i></a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mr-auto">
                            <h6 className="m-0 font-weight-bold text-primary">{this.state.category.name}</h6>
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

        );
    }
}

export default Category;






