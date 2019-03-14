import React, { Component } from 'react';
import reactCSS from 'reactcss';
import CategoryShow from './Category-show';
import CategoryEdit from './Category-edit';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { collapse: false,
                           edit: false, 
                       category:props.category
                    };
        this.updateState = this.updateState.bind(this);
    }

    toggle() {
        this.updateState({ collapse: !this.state.collapse });
    }

    changeColor(rgb){
        const category = this.state.category;
        category.color = rgb.r+"-"+rgb.g+"-"+rgb.b+"-"+rgb.a;
        this.updateState({category});
    }

    editCategory(edit){
        this.updateState({ edit });
    }

    updateState(field){
        let state = Object.assign({}, this.state, field);
        this.setState(state);
    }

    render() {
    
        const styles = reactCSS({
            'default': {
                color: {
                    borderLeft: `0.25rem solid rgba(${this.state.category.color.split('-')[0]}, ${ this.state.category.color.split('-')[1] }, ${ this.state.category.color.split('-')[2] }, ${ this.state.category.color.split('-')[3]})`,
                    cursor: 'pointer',
                },
            },
        });

        return (
            <div className="card shadow mb-4 animation-grow-in">
                <div style={styles.color} className={this.state.collapse ? "d-block card-header py-3 collapsed" : "d-block card-header py-3"}>

                    {   this.state.edit ? 
                        <CategoryEdit category={this.state.category} changeColor={this.changeColor.bind(this)} 
                        edit={this.editCategory.bind(this)} toggle={this.toggle.bind(this)} {...this.props}/>   
                      : <CategoryShow category={this.state.category} edit={this.editCategory.bind(this)} toggle={this.toggle.bind(this)}/>   
                    }    
                    
                
                </div>
                <div className={this.state.collapse ? "collapse show" : "collapse"} id="collapseCardExample">
                    <div className="card-body">
                        This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
                    </div>
                </div>
            </div>

        );
    }
}

export default Category;






