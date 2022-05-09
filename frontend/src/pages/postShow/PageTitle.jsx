import React, {Component} from 'react';

export class PageTitle extends Component{
    render(){
        return(
            <div>
                <h1><b><u>{this.props.Name}</u></b></h1>
            </div>
        )
    }
}