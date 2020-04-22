import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Collection.scss';

class Collection extends Component {
    render(){
        return(
            <div className='Collection'>
                here is Collection
            </div>
        )
    }
}

export default withRouter(Collection);