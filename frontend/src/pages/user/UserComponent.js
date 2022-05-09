/*eslint-disable*/
import React from 'react';
import './userpage.scss'
import ItemComponent from '../store/item';
import config from '../store/conf/config';

////这是返回用户信息的组件
class Userinfo extends React.Component {
    componentWillMount() {

    }

    componentDidMount(){
        
    }

    constructor(props) {
        super(props);
        this.state = {
            info:[{id:'1155123456',img: "./img/goods1.jpg",username:"Chen Tai Man",gender:'Male',location:'CUHK SHHO College', email:'1155123456@link.cuhk.edu.hk'}],
        }
    }
    render() {
        return (
            <div >
                <ul >
                    <li>Username: {this.state.info[0].username}</li>
                    <li>{this.state.info[0].id}</li>
                    <li>{this.state.info[0].gender}</li>
                    <li>{this.state.info[0].location}</li>
                    <li>Email: {this.state.info[0].email}</li>
                </ul>
            </div>);
    }   
  }
 ///返回发布记录的组件
  class Hispost extends React.Component {
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            myhis:[{id:'16',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'5',img: "./img/goods1.jpg",title:"ball",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'45',img: "./img/goods1.jpg",title:"textbooks",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'23',img: "./img/goods1.jpg",title:"chips",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'}],
        }
    }
        render() {
            return (
                <div >
                {this.state.myhis.map((good,index) => ( <ItemComponent key={index} id={good.id} type={good.type} complete={good.complete} img={good.img} title={good.title} price={good.price} describe={good.describe} post_date={good.post_date} location={good.location} author={good.author}/>))}
            </div>);
            }
  }

  class Favpost extends React.Component {
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            myfav:[{id:'16',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'5',img: "./img/goods1.jpg",title:"ball",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'}],
        }
    }
        render() {
            return (
                <div >
                {this.state.myfav.map((good,index) => ( <ItemComponent key={index} id={good.id} type={good.type} complete={good.complete} img={good.img} title={good.title} price={good.price} describe={good.describe} post_date={good.post_date} location={good.location} author={good.author}/>))}
            </div>);
            }
  }

export default class  GoodsClassifyComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            classifyNames: ['Edit my profile','My information','My post history','My favorite','Contact','Logout'],

            myfav: [{id:'1',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'2',img: "./img/goods1.jpg",title:"good_1",type:'sell',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'3',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},],
            history:[{id:'1',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'2',img: "./img/goods1.jpg",title:"good_1",type:'sell',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},
            {id:'3',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'},],
            info:[{id:'1',img: "./img/goods1.jpg",title:"good_1",type:'buy',complete:'no',author:'hhh',post_date:'kkk',location:'cuhk',price:'50',describe:'jjjjj',classification:'sports'}],
            
            render:''
        }
    }
    // 页面跳转
    /*goPage(url) {
        this.props.history.push(config.path +url)
    }*/
    ShowComponent(name){
        this.setState({render:name})
      }
    renderComponent =()=>{
        switch (this.state.render) {
          case 'My information': return <Userinfo/>
          case 'My post history': return <Hispost/>
          case 'My favorite': return <Favpost/>
          default: return <Userinfo/>
        }
      }
    
    
    render(){
        return(
            <div id='goods'>
                {/* 搜索框 */}
                <div className='backward'>
                <button className="home"></button>
                </div>
                <div className="search-bar">
                   
                    <input className="search-container" placeholder='Search...'/>
                    <button className="search-icon"></button>
                    
                </div>
                {/*  分类列表  */}
                <div className="classify-container">
                    <div className="classify-name-list">
                        
                            <button className="head" variant="outlined"></button>
                             
                        <div className='usertool'>
                        {this.state.classifyNames.map((item,index) => (<div className="user-item" key={index} onClick={()=>{this.ShowComponent(item)}}>{item}</div>
                        ))}</div>
                    </div>
                    <div className="classify-goods-list" >
                         {this.renderComponent()}
                    </div>
                </div>
            </div>
        );
    }
}