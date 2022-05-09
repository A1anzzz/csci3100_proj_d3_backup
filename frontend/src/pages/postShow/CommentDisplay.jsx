// This part determines how the comments are to be displayed

import React, {Component} from 'react';

export class CommentDisplay extends Component{
    render(){
        return(
            <div className='transbox-comment'>
                <div className='comment-user'>
                    <span>
                        <img src={[require("./img/head.png")]} alt='' style={{width:50, height: 50}}/>
                        <br/>
                        {this.props.comment.maker} 
                    </span>
                </div>
                <div className="comment-content">
                    <p>{this.props.comment.content}</p>
                </div>
            </div>
        )
    }
}