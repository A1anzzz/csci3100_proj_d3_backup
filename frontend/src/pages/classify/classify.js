/*eslint-disable*/
import React from 'react';
import {Route, Routes} from "react-router-dom";
import config from '../store/conf/config';
import ItemComponent from '../store/item';
import './classify.scss'

export default class  GoodsClassifyComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            classifyNames: ['Anti-epidemic','Books & textbook','Furniture','Electrical appliances','Digital products','Stationery office',
                            'Cosmetics','Costume','Kitchen supplies','Food','Other'],
            class1: [{id:'1',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
                            {id:'2',img: "./img/goods1.jpg",title:"good_1",type:'sell',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
                            {id:'3',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},]
        }
    }
    // 页面跳转
    /*goPage(url) {
        this.props.history.push(url)
    }*/
    render(){
        return(
            <div id='goods'>
                {/* 搜索框 */}
                <div className='backward'>
                <button className="home" variant="outlined"></button>
                <button  className="fav" variant="outlined"></button>
                </div>
                <div className="search-bar">
                   
                    <div className="search-container">Search...</div>
                    <div className="search-icon"></div>
                    <button className="head" variant="outlined"></button>
                </div>
                {/*  分类列表  */}
                <div className="classify-container">
                    <div className="classify-name-list">
                        <div className="classify-name-item active">All </div>
                        {this.state.classifyNames.map((item,index) => (<div className="classify-name-item" key={index}>{item}</div>
                        ))}
                    </div>
                    <div className="classify-goods-list">
                        {/*<Routes>
                            <Route path= '/item' component={GoodsItemComponent}></Route>
        </Routes>*/}
                    {this.state.class1.map((good,index) => ( <ItemComponent key={index} id={good.id} type={good.type} complete={good.complete} img={good.img} title={good.title} price={good.price} describe={good.describe} post_date={good.post_date} location={good.location} author={good.author}/>))}
                    </div>
                </div>
            </div>
        );
    }
}