// This part serves to list the comments

import React, {Component} from 'react';
import { CommentDisplay } from './CommentDisplay';

export class CommentList extends Component{
    static defaultProps = {
        comments: []
    }

    render(){
        return(
            <div>
                {this.props.comments.map((comment, i) =>
                <CommentDisplay comment={comment} key={i} />)
                }
            </div>
        )
    }
}