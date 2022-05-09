/*eslint-disable*/
import React from 'react';


import './items.scss'

export default class  ItemComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        
        
        
    }

    // 页面跳转
    
    //goPage(url) {
    //    this.props.history.push(url)
    //}
    
    render(){
        return(
            
                    <button className="card-body" > 
                      
                            <div className='posterHead' >
                                
                                
                                    <div className='l1'>{this.props.id}</div>
                                    <div className='l2' >{this.props.type}</div>
                                    <div className='l3' >{this.props.complete}</div>
                                
                            </div>
                            <div className='cardcontent'>
                            <div className='img'>
                                <img className="goods-cover"  src={[require("./img/goods1.jpg")] }  alt={this.props.title}/>
                            </div>
                                    <div className="goods-title" >{this.props.title}</div>
                                    <div className="goods-price" >HKD{this.props.price}</div>
                                    <div className="goods-desc" >{this.props.describe}</div>
                            </div>
                            <div className='posterFoot'>
                                <ul >
                                    <li className='l4' >{this.props.post_date}</li>
                                    <li className='l5' >{this.props.location}</li>
                                    <li className='l6' >{this.props.author}</li>
                                </ul>
                            </div>
                    </button>   
             
            
        );
    }
 }
