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
        this.categoriesBackup = [];
    }

    componentWillMount(){
        this.props.store.subscribe( () => {
            const resp = this.props.store.getState().category;
            this.setState(resp, () =>{
                if(!resp.updated){
                    this.categoriesBackup = [];
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

    updateCategory = (category, callback) => {
        this.props.store.dispatch(CategoryApi.update(category,callback));
    }

    componentDidMount(){
        this.loadCategories();
    }

    removeCategory = (category) => {
        this.props.store.dispatch(CategoryApi.remove(category));
    }

    openCategoryModel = () =>{
        this.setState({create: !this.state.create});
    }

    filterCategory = (event) => {

        if(this.categoriesBackup.length === 0){
            this.categoriesBackup = this.state.categories;
            this.search(event.target.value);
        }else{
            let keyValue = event.target.value;
            let state = Object.assign({}, this.state, {categories:this.categoriesBackup});
            this.setState(state, () =>{this.search(keyValue)});
        }
    }

    search = (keyValue) => {

        if(keyValue.length > 0){
            const filtered = this.state.categories.filter( cat =>{
                return cat.name.toLowerCase().includes(keyValue.toLowerCase());
            });
            let state = Object.assign({}, this.state, {categories:filtered});
            this.setState(state);
        }
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
                        {   this.state.create ?
                            <CategoryCreate {...this.props} hideModel={this.openCategoryModel} createCategory={this.createCategory}/>
                            : null
                        }
                    </div>
                </div>
                {/*
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                */}
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-body p-4">
                        <div className="row ">
                            <div className="col-6">
                                <input type="text" className="form-control" id="name" 
                                    onKeyUp={this.filterCategory} placeholder="Search..."/>
                            </div>
                        </div>
                        
                        <hr/>

                        { (this.state.categories && this.state.categories.length > 0) ?
                            this.state.categories.map(category => (<Category key={category.id} 
                                category={category} update={this.updateCategory} remove={this.removeCategory}/>))
                            :
                            <div className="container">
                                <div className="row justify-content-center m-5">
                                    <div className="col-auto">
                                        <i className="far fa-sad-tear fa-10x text-gray-300"></i>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <h4 className="h4 text-gray-800">
                                            There is not category 
                                            <small className="text-muted">
                                                <a style={{cursor:'pointer'}} onClick={this.openCategoryModel}> click here! </a>
                                            </small>
                                        </h4>
                                    </div>
                                </div>
                            </div> 
                        }

                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Categories;






