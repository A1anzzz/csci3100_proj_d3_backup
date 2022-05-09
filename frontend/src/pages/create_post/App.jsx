import './App.css';
import './FormElement';
import {SignupForm} from './FormElement';
import {PageTitle} from './PageTitle';
import React from 'react';

function CreatePost() {
  return (
    <div className='transbox md-5'>
      <div className="container p-5">
        <PageTitle/>
        <SignupForm />
      </div>
    </div>
    
  );
}

export default CreatePost;
