import React, { Component } from 'react';
import  ColorPicker  from '../../util/ColorPicker';
import  ModalIcon  from './ModalIcon';
import { Button } from 'reactstrap';

class CategoryEdit extends Component {

    constructor(props) {
        super(props);
        this.state = { showIcons: false,
                       category:props.category
                    };
    }

    toggleIcons() {
        this.setState(Object.assign({}, this.state, { showIcons: !this.state.showIcons}));
    }

    cancel(){
        this.props.edit(false);
    }

    changeIcon(icon) {
        const category = this.state.category;
        category.icon = icon;
        this.setState(Object.assign({}, this.state, {category:category}));
    }

    render() {
    
        return (
            <div className="row align-items-center">
                
                <div className="col-auto">
                    <ColorPicker color={this.state.category.color} changeColorParent={this.props.changeColor}/>
                </div>

                <div className="col-auto">
                    <Button color="bg-light" onClick={this.toggleIcons.bind(this)}>
                        <i className={this.state.category.icon + " fa-2x"}></i>
                    </Button>
                    {
                        this.state.showIcons &&
                        <ModalIcon toggleIcons={this.toggleIcons.bind(this)} changeIcon={this.changeIcon.bind(this)}/>
                    }
                </div>

                <div className="col-lg-7 col-md-5">
                    <input type="text" className="form-control" id="name" defaultValue={this.state.category.name}/>
                </div>

                <div className="col-3">
                    <div className="row">        
                        <div className="col-lg-7 col-md-1 p4" onClick={this.props.toggle}></div>
                        <div className="col-lg-1 col-md-1 mr-auto">
                            <a style={{cursor: 'pointer'}}><i className="fas fa-check fa-2x"></i></a>
                        </div>
                        <div className="col-lg-1 col-md-1">
                            <a style={{cursor: 'pointer'}} onClick={this.cancel.bind(this)}><i className="fas fa-times fa-2x"></i></a>
                        </div>
                    </div>
                </div>

            </div>    

        );
    }
}

export default CategoryEdit;






