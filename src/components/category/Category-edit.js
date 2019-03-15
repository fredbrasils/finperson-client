import React, { Component } from 'react';
import  ColorPicker  from '../../util/ColorPicker';
import  ModalIcon  from './ModalIcon';
import { Button } from 'reactstrap';

class CategoryEdit extends Component {

    constructor(props) {
        super(props);
        this.state = { showIcons: false,
                       category: Object.assign({},props.category),
                       message: props.message,
                    };
    }

    componentWillReceiveProps(newProps) {
        this.setState({message: newProps.message});
    }

    toggleIcons() {
        this.setState(Object.assign({}, this.state, { showIcons: !this.state.showIcons}));
    }

    changeColor = (rgb) =>{
        const category = this.state.category;
        category.color = rgb.r+"-"+rgb.g+"-"+rgb.b+"-"+rgb.a;
        this.setState({category});
    }

    changeIcon = (icon) => {
        const category = this.state.category;
        category.icon = icon;
        this.setState({category});
    }

    updateCategory = () =>{
        if(!this.name.value || this.name.value.trim() === ''){
            this.setState({message : "Inform category's name."});
            return false;
        }
         
        this.state.category.name = this.name.value.trim();
        this.props.update(this.state.category);
    }

    toggle = () => {
        if(this.props.toggle){
            this.props.toggle();
        }
    }

    cancel = () => {
        if(this.props.cancel){
            this.props.cancel();
        }
    }

    render() {
    
        return (
            <div className="row align-items-center">
                
                <div className="col-auto">
                    <ColorPicker color={this.state.category.color} changeColorParent={this.changeColor}/>
                </div>

                <div className="col-auto">
                    <Button color="bg-light" onClick={this.toggleIcons.bind(this)}>
                        <i className={this.state.category.icon + " fa-2x"}></i>
                    </Button>
                    {
                        this.state.showIcons &&
                        <ModalIcon toggleIcons={this.toggleIcons.bind(this)} changeIcon={this.changeIcon}/>
                    }
                </div>

                <div className="col-lg-7 col-md-5">
                    <input type="text" className="form-control" id="name" 
                        ref={(input) => this.name = input}
                        defaultValue={this.state.category.name}/>
                    {
                        this.state.message && 
                        <div className="invalid-field">
                            {this.state.message}
                        </div>
                    }   
                </div>

                <div className="col-3">
                    <div className="row">        
                        <div className="col-lg-7 col-md-1 p4" onClick={this.toggle}></div>
                        <div className="col-lg-1 col-md-1 mr-4">
                            <a style={{cursor: 'pointer'}} onClick={this.updateCategory}>
                                <i className="fas fa-check fa-2x"></i>
                            </a>
                        </div>
                        <div className="col-lg-1 col-md-1">
                            <a style={{cursor: 'pointer'}} onClick={this.cancel}><i className="fas fa-times fa-2x"></i></a>
                        </div>
                    </div>
                </div>

            </div>    

        );
    }
}

export default CategoryEdit;






