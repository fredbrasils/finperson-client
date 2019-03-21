import React, { Component } from 'react';
import reactCSS from 'reactcss';
import CategoryShow from './Category-show';
import CategoryEdit from './Category-edit';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { collapse: false,
                           edit: false, 
                       category:props.category,
                        message: '',
                    };
    }

    toggle = () => {
        this.updateState({ collapse: !this.state.collapse });
    }

    cancel = () =>{
        this.updateState({ edit:false });
    }

    editCategory = () => {
        this.updateState({ edit:true, message: '' });
    }

    updateState = (field) => {
        let state = Object.assign({}, this.state, field);
        this.setState(state);
    }

    updateCategory = (category) =>{
        this.props.update(category,
            (response) => {
                if(response.success){
                    this.cancel();
                }else{
                    this.setState({message:response.message});
                }
            });
    }

    render() {
    
        const styles = reactCSS({
            'default': {
                color: {
                    borderLeft: `0.25rem solid rgba(${this.props.category.color.split('-')[0]}, ${ this.props.category.color.split('-')[1] }, ${ this.props.category.color.split('-')[2] }, ${ this.props.category.color.split('-')[3]})`,
                    cursor: 'pointer',
                },
            },
        });

        return (
            <div className="card shadow mb-4 animation-grow-in">
                <div style={!this.state.edit ? styles.color : null} className={this.state.collapse ? "d-block card-header py-3 collapsed" : "d-block card-header py-3"}>

                    {   this.state.edit ? 
                        <CategoryEdit category={this.props.category} message={this.state.message}
                         update={this.updateCategory} cancel={this.cancel} toggle={this.toggle} />   
                      : <CategoryShow category={this.props.category} edit={this.editCategory} 
                        remove={this.props.remove} toggle={this.toggle.bind(this)}/>   
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






