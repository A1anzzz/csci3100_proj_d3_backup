import React, {Component} from 'react';
import { CommentList } from './CommentList';
import axios from "axios";
import moment from "moment";

export class CommentComponent extends Component{
    constructor(){
        super();
        this.state={
            commentList:[],
            comment:[],
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount() {
        this.refreshList();

        this.setState(
            {
                comment:{
                    date:moment().format("YYYY-MM-DD"),
                    maker:"liyu",
                    match:this.props.id,
                    valid:true,
                }
            }
        )
    }
    
    refreshList = () => {
        let id = this.props.id;
        axios
          .get(" http://localhost:8000/post/comments/")
          .then((res) => this.setState({ commentList: res.data }))
          .catch((err) => console.log(err));
    };

    handleChange(event){
        const{name, value} = event.target;
        const comment = { ...this.state.comment, [name]: value };
        this.setState({comment});
    }

    handleSubmit(event){
        event.preventDefault();

        let comment=this.state.comment;

        axios
        .post(process.env.REACT_APP_API+'post/comments/', comment)
        .then((res) => alert("You have already make a comment."),
        (error)=>alert("Failed."))
        ;
    }
    
    render(){
        return(
            <>
            <CommentList comments={this.state.commentList}/>
            <div className="container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Comment here</span>
                </div>
                <textarea 
                        name="content"
                        type="text" 
                        value={this.state.content} 
                        onChange={this.handleChange}
                        className="form-control" 
                        aria-label="Comment here"/>
                </div>

                <div className="comment_button">
                    <button className="btn btn-secondary" onClick={this.handleSubmit}>Send</button>
                </div>
                </div>
            </>
        )
    }
}

 