import React from 'react';
import './homeindex.scss'
import ItemComponent from "./item"
import {Route, Switch, browserHistory} from "react-router-dom";
import asyncComponents from '../store/async/AsyncComponent';
import config from "../store/conf/config";
import {Link, useNavigate} from 'react-router-dom';

export default class  IndexComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recommendGoodsList: [{id:'1',img: "",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'2',img: "",title:"good_1",type:'sell',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'3',img: "",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},],
        }
        
        
    }
    componentDidMount(){
        
        
    }
    componentWillUnmount() {
       
        
    }
    // 页面跳转
    
    goPage(url) {
        console.log(url,'7777')
        this.props.history.replace(url)
    }
  
    // 获取快速导航栏数据
    

    //获取商品推荐数据
    
    render(){
        return(
            <div id={'homeIndex'}>

             {/*  头部导航栏  */}
                <div className='header'>
                    
                    <input className="search-container" placeholder='Search...'> 
                    
                      
                        
                    </input>
                    <button className="search-btn">Search</button>
                    
                    <div className="rightword">
                            <ul>
                            <Link to="/cart"><button className="a1 " >My favorite</button></Link>
                            <button className="a2" >Logout</button>
                            
                            </ul>
                    </div>
                    <div className="login-container">
                        <div className="un-login">
                        <Link to="/user"><button className="head" ></button></Link>
                        </div>
                    </div>
                </div>
                <div className="quicknav-title">
                                <div className="line"></div>
                                    <div className="content">
                                        <div className="love-icon"></div>
                                        <div className="love-text">Quick Guide</div>
                                    </div>
                                <div className="line"></div>
                    </div>
                <div className="quick-nav">                    
                    <Link to="/Create_post"><div className='writepost'></div></Link>
                    <p className='wp'>Write a post now!</p>
                    <Link to="/classify">   <div className='allposts'></div></Link>
                    <p className='va'>View all posts by categories</p>
                    <Link to="/chat"> <div className='chatbox'></div></Link>
                    <p className='cw'>Chat with others</p>
                    <Link to="/cart"> <div className='myfav'></div></Link>
                    <p className='mf'>My posts collection</p>
                </div> 
            <div className="goods-recommend-title">
                <div className="line"></div>
                <div className="content">
                    <div className="love-icon"></div>
                    <div className="love-text">Recommended for you</div>
                </div>
                <div className="line"></div>
                
                
            </div>
            <div className='recGood'>
               
                {this.state.recommendGoodsList.map((good,index) => ( <ItemComponent key={index} id={good.id} type={good.type} complete={good.complete} img={good.img} title={good.title} price={good.price} describe={good.describe} post_date={good.post_date} location={good.location} author={good.author}/>))}

        
                </div>

            
         </div>
        );
    }
}