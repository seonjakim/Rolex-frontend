import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Detail.scss';

class Detail extends Component {
    render(){
        return(
            <div className='Detail'>
                here is Detail
            </div>
        )
    }
}

export default withRouter(Detail);