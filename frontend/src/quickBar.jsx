import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class QuickBar extends Component{
    render(){
        return(
            <div className="container-fluid px-5 py-2 fixed-top" style={{backgroundColor:`rgb(181,251,190)`}}>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Back</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default QuickBar;