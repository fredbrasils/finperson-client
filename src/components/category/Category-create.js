import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {getFontAwesomeBy} from '../../util/FontAwesome';
import  ColorPicker  from '../../util/ColorPicker';

class CategoryCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
    
    this.icons = getFontAwesomeBy();
    this.toggle = this.toggle.bind(this);
    this.iconSelected = {className: ''};
    this.category = {name:'', icon:'', color:''};
  }

  toggle() {
    this.setState({modal: !this.state.modal});
    this.props.hideModel();
  }

  selected = (icon) => {
    if(this.refs[icon] !== this.iconSelected){
      this.category.icon = icon;
      this.iconSelected.className = "col-2 p-2";
      this.refs[icon].className = this.refs[icon].className + " icon-selected";
      this.iconSelected = this.refs[icon];
    }
  };
  
  setColor = (rgb) => {
    this.category.color = rgb.r+"-"+rgb.g+"-"+rgb.b+"-"+rgb.a;;
  }
  
  componentWillMount(){
    this.props.store.subscribe( () => {
        const resp = this.props.store.getState().category;
        if(resp.success){
          this.setState({modal:false});
        }else{
          this.setState({message:resp.message});
        }
    });
  }

  createCategory = () =>{
    if(this.valid()){
      this.category.name = this.name.value.trim();
      this.props.createCategory(this.category);
    }
  }

  valid = () => {

    if(!this.name.value || this.name.value.trim() === ''){
      this.setState({message : "Inform category's name.", success : false});
      return false;
    }
    
    if(!this.category.color || this.category.color === ''){
      this.setState({message : "Inform category's color.", success : false});
      return false;
    }

    if(!this.category.icon || this.category.icon === ''){
      this.setState({message : "Inform category's icon.", success : false});
      return false;
    }

    return true;
  }

  render() {
    return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} 
                backdrop={true}>
          <ModalHeader toggle={this.toggle}>Create Category</ModalHeader>
          <ModalBody>
            <div className="form-group row">
              <div className="col-10">
                <input type="text" ref={(input) => this.name = input} 
                                  className="form-control form-control-user" id="categoryname" 
                                  placeholder="Category's Name"/>
                {
                  this.state.message && 
                  <div className="invalid-field">
                    {this.state.message}
                  </div>
                }
              </div>

              <div className="col-auto">
                  <ColorPicker changeColorParent={this.setColor}/>
              </div>
            </div>
            <hr/>

            <div className="container-icons">
                {
                    this.icons.map(icon => (
                        <div className="col-2 p-2" key={icon} ref={icon} onClick={() => this.selected(icon)}>
                            <i className={icon+ " fa-2x"}></i>
                        </div>
                        ))
                }
            </div>  
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.createCategory}><i className="fas fa-check"></i></Button>{' '}
            <Button color="danger" onClick={this.toggle}><i className="fas fa-times"></i></Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default CategoryCreate;