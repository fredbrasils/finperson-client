import React, { Component } from 'react';
import Category from './Category';
import CategoryApi from '../../business/CategoryApi';
import CategoryCreate from './Category-create';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {categories:[], 
                      create:false,
                      updated: true};
    }

    componentWillMount(){
        this.props.store.subscribe( () => {
            const resp = this.props.store.getState().category;
            this.setState(resp, () =>{
                if(!resp.updated){
                    this.loadCategories();
                }
            });
        });
    }

    loadCategories(){ 
        this.props.store.dispatch(CategoryApi.findAll());               
    }

    createCategory = (category) => {
        this.props.store.dispatch(CategoryApi.insert(category));
    }

    componentDidMount(){
        this.loadCategories();
    }

    openCategoryModel = () =>{
        this.setState({create: !this.state.create});
    }

  render() {
    
    return (
        <div className="container-fluid container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <div className="row">
                    <div className="col-auto">
                       <h1 className="h3 mb-0 text-gray-800">Category</h1>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-info" onClick={this.openCategoryModel}>
                            <i className="fas fa-plus"></i>
                        </button>
                        {   this.state.create &&
                            <CategoryCreate {...this.props} hideModel={this.openCategoryModel} createCategory={this.createCategory}/>
                        }
                    </div>
                </div>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-body p-4">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" id="name" placeholder="Search..."/>
                            </div>
                            <div className="col-1">
                                <button type="submit" className="btn btn-info"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                        
                        <hr/>

                        { (this.state.categories && this.state.categories.length > 0) &&
                            this.state.categories.map(category => (<Category key={category.id} category={category}/>))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Categories;






