import React, { Component } from 'react';
import Category from './Category';
import CategoryApi from '../../business/CategoryApi';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {categories:[], loading:false};
    }

    componentWillMount(){
        this.props.store.subscribe( () => {
            const resp = this.props.store.getState().category;
            this.setState(resp);
        });
    }

    loadCategories(){ 
        this.props.store.dispatch(CategoryApi.findAll());               
    }

    componentDidMount(){
        this.loadCategories();
    }

  render() {
    
    return (
        <div className="container-fluid container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Category</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-body p-4">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" id="name" placeholder="Category's name"/>
                            </div>
                            <div className="col-1">
                                <button type="submit" className="btn btn-info"><i className="fas fa-plus"></i></button>
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






