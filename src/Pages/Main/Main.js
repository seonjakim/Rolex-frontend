import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';

class Main extends Component {
    render(){
        return(
            <div className='Main'>
                here is Main
            </div>
        )
    }
}

export default withRouter(Main);