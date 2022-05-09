import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';

class Profile extends React.Component {
   render = () => {
       return (
       <div className="tbox">
           <div className="text-center">
           <h1>Outline for test</h1>
           <ul>
                <li><a href="http://localhost:8000/accounts/login">login</a></li>
                <li><a href="http://localhost:8000/user_profiles/signup">Create_account</a></li>
                <li><a href="http://localhost:8000/accounts/password_change">Change_password</a></li>
                <li><a href='http://localhost:8000/accounts/logout'>logout</a></li>
           </ul>
           </div>
       </div>
       );
   }
}
export default Profile;