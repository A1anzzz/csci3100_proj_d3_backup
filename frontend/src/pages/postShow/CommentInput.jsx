// This part is for comment input

import React, {Component} from 'react';
import axios from "axios";

export class CommentInput extends Component{
    constructor(props){
        super(props);
        this.state={
            UserName:"liyu",
            CommentInput:""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const{name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        let comment=this.state;
  
        axios
        .post(process.env.REACT_APP_API+'post/comments/', comment)
        .then((res) => alert("You have already make a comment."),
        (error)=>alert("Failed."))
        ;
    }

    render(){
        return(
            <>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Comment here</span>
                    </div>
                    <textarea 
                        name="CommentInput"
                        type="text" 
                        value={this.state.CommentInput} 
                        onChange={this.handleChange}
                        className="form-control" 
                        aria-label="Comment here"/>
                </div>

                <div className="comment_button">
                    <button className="btn btn-secondary" onClick={this.handleSubmit}>Send</button>
                </div>
            </>
        )
    }
}