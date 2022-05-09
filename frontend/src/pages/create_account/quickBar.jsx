import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class QuickBar extends Component{
    render(){
        return(
            <div className="container-fluid px-4 py-2 fixed-top" style={{backgroundColor:`rgb(181,251,190)`}}>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                    <Link class="nav-link active" to="/">Back</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default QuickBar;