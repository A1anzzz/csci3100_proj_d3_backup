/*eslint-disable*/
import React from 'react';
import {Route, Routes} from "react-router-dom";
import '../store/items.css'

export default class  GoodsItemComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // 页面跳转
    goPage(url) {
        this.props.history.push(url)
    }
    render(){
        return(
            <div id='classify-items'>
                <div className="card">
                    <div className="card-body">
                        <div className="card-goods-item">
                            <img src={[require('./images/home/goods/goods1.jpg')]} alt="good"/>
                            <div className="goods-title">This is an item</div>
                        </div>
                        <div className="card-goods-item">
                            <img src={[require('./images/home/goods/goods1.jpg')]} alt="good"/>
                            <div className="goods-title">This is an item</div>
                        </div><div className="card-goods-item">
                            <img src={[require('./images/home/goods/goods1.jpg')]} alt="裙装裙装6"/>
                            <div className="goods-title">This is an item</div>
                        </div>
                        <div className="card-goods-item">
                            <img src={[require('./images/home/goods/goods1.jpg')]} alt="裙装裙装6"/>
                            <div className="goods-title">This is an item</div>
                        </div>
                        <div className="card-goods-item">
                            <img src={[require('./images/home/goods/goods1.jpg')]} alt="裙装裙装6"/>
                            <div className="goods-title">This is an item</div>
                        </div>
                        <div className="card-goods-item">
                            <img src={[require('./images/home/goods/goods1.jpg')]} alt="裙装裙装6"/>
                            <div className="goods-title">This is an item</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}