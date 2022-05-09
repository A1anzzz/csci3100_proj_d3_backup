import React from 'react';


export class Description extends React.Component{

    render(){
        // Description, status and picture
        return(
            <>
            <div className='container'>
                <p>{this.props.Content}</p>
            </div>

            <div className='container'>
                <Picture i={this.props.Img}/>
            </div>
            </>
            
        )
    }
}

class Picture extends React.Component{
    render(){
        let i = this.props.i;
        return(
            <div className="card" style={{width:"100%"}}>
                <img src={i} alt="postImage" className="card-img-top" />
            </div>
        )
    }
}

