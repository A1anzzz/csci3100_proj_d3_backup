import React from 'react';
import config from '../store/conf/config';
import  './cart.scss';
import ItemComponent from '../store/item';
export default class  CartComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            myfav: [{id:'1',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'2',img: "./img/goods1.jpg",title:"good_1",type:'sell',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'3',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},],
        }
    }
    // 页面跳转
    //goPage(url) {
    //    this.props.history.push(url)
    //}
    render(){
        return(
            <div id='goods'>
                <div className='backward'>
                <button className="home" variant="outlined"></button>
                <button className="user" variant="outlined"></button>
                </div>
                <div className="search-bar">
                   
                    <div className="search-container">Search...</div>
                    <button className="search-icon"></button>
                    
                </div>
                <div className="card">
                {this.state.myfav.map((good,index) => ( <ItemComponent key={index} id={good.id} type={good.type} complete={good.complete} img={good.img} title={good.title} price={good.price} describe={good.describe} post_date={good.post_date} location={good.location} author={good.author}/>))}
                    </div>
                </div>
            
        );
    }
}