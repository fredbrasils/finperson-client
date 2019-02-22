import React, { Component } from 'react';
import { FadeLoader} from 'react-spinners';

export default class FadeLoaderSpinner extends Component {

    constructor(props){
        super(props);        
        this.state = {loading:false};
    }

    render(){
        const divBackgroudSpinner = {
            position: 'absolute',
            height: '105%',
            width:  '100%',
            margin: '-4rem',
            'backgroundColor': 'gray',
            'opacity': '0.5',
            'filter': 'alpha(opacity=50)',
            'zIndex': '9999'
          };

        const spinnerDiv = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            'marginLeft': '-50px',
            'marginTop': '-50px'
          };

        return (
            <>
                {
                    (this.state.loading) &&
                    <div style={divBackgroudSpinner}>
                        <div className="d-flex justify-content-center" style={spinnerDiv}> 
                            <FadeLoader
                                color={'#E0641A'}
                                loading={this.state.loading}
                                height = {10}
                                heightUnit = {"px"}
                                width = {100}
                                widthUnit = {"px"}
                                radius = {2}
                                />
                        </div>
                    </div>
                }
            </>
        );
    }
}
