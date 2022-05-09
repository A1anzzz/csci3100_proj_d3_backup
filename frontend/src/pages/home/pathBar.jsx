import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class PathBar extends Component{
    render(){
        return(
            <div className="p-4 mx-5 fixed-bottom" tyle={{backgroundColor:`rgb(181,251,190)`}}>
                <ul className="nav nav-pills row text-center">
                    <li className="nav-item col" key="1">
                    <Link className="nav-link active" to="/chat">Message</Link>
                    </li>
                    <li className="nav-item col" key="2">
                    <Link className="nav-link active" to="/Create_post">Post</Link>
                    </li>
                    <li className="nav-item col" key="3">
                    <Link className="nav-link active" to="http://localhost:8000/user_profiles/personal_page">Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PathBar;