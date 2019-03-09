import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        r: props.color ? props.color.split('-')[0] : '241',
        g: props.color ? props.color.split('-')[1] : '112',
        b: props.color ? props.color.split('-')[2] : '19',
        a: props.color ? props.color.split('-')[3] : '1',
      }
    };
  }


  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    this.props.changeColorParent(color.rgb);
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        popover: {
          position: 'absolute',
          zIndex: '9999',
          top: '-250%',
          left: '-3px',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div className="row">
        <div className="col-auto">
            <div style={ styles.color } onClick={ this.handleClick } />
        </div>
        { this.state.displayColorPicker ?
            <div className="col-auto"> 
                <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ this.handleClose }/>
                    <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                </div> 
            </div>: null }

      </div>
    )
  }
}

export default ColorPicker