import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {getFontAwesomeBy} from '../../util/FontAwesome';

class ModalIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      backdrop: true
    };
    this.icons = getFontAwesomeBy();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.props.toggleIcons();
  }

  iconSelected = (iconSelected) => {
    this.props.changeIcon(iconSelected);
    this.toggle();
  };

  render() {
    return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} 
                backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Icons</ModalHeader>
          <ModalBody>
            <div className="container-icons">
                {
                    this.icons.map(icon => (
                        <div className="col-2 p-2" key={icon}>
                            <i className={icon+ " fa-2x"} onClick={() => this.iconSelected(icon)}></i>
                        </div>
                        ))
                }
            </div>  
          </ModalBody>
          {/*<ModalFooter>
            <Button color="success" onClick={this.toggle}><i className="fas fa-check"></i></Button>{' '}
            <Button color="danger" onClick={this.toggle}><i className="fas fa-times"></i></Button>
          </ModalFooter>
          */}
        </Modal>
    );
  }
}

export default ModalIcon;