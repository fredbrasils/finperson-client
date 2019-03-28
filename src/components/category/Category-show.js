import React, { Component } from 'react';

class CategoryShow extends Component {

    edit = () => {
        if(this.props.edit){
            this.props.edit(true);
        }
    }

    removeCategory = () =>{
        this.props.remove(this.props.category);
    }


    render() {
    
        return (
            <div className="row align-items-center">
                
                <div className="col-auto">
                    <i className={this.props.category.icon + " fa-2x"}></i>
                </div>

                <div className="col-9 col-md-7 mr-auto" onClick={this.props.toggle}>
                    <h4 className="m-0 font-weight-bold text-primary">{this.props.category.name}</h4>
                </div>
                <div className="col-auto">
                    <a style={{cursor: 'pointer'}} onClick={this.edit} ><i className="fas fa-edit fa-2x"></i></a>
                </div>
                <div className="col-auto">
                    <a style={{cursor: 'pointer'}} onClick={this.removeCategory}><i className="fas fa-trash-alt fa-2x"></i></a>
                </div>
            </div>    
        );
    }
}

export default CategoryShow;






