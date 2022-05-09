import './App.css';
import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {PageTitle} from './PageTitle';
import {Description} from './Description';
import {CommentComponent} from './CommentComponent'
import axios from "axios";

import {
    useLocation,
  } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      return (
        <Component
          {...props}
          router={location}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

class PostDisplay extends Component{
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      itemList: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    let id = this.props.router.state.name;
    axios
      .get(" http://localhost:8000/post/items/"+id)
      .then((res) => this.setState({ itemList: res.data }))
      .catch((err) => console.log(err));
  };

  renderItem = () => {
    const item = this.state.itemList;

    return (
        <div className="transbox">
          <div>
            <br/>
            <PageTitle Name={item.title}/>
            <Inform Name={item.author} Date={item.postDate}/>
            <hr/>
            <h3 className="text-danger">{"$"+item.price} <button type="button" className="btn btn-outline-primary">{item.tradeType =='s' ? "On sale" : "Seek sale"}</button></h3>
            <Description Content={item.describe} Img={item.image}/>
            <p className="text-end p-3">{item.location}</p>
            <div className="text-end">
            <Link to="/chat"> <button type="button" className="btn btn-outline-success pull-right">Chat!</button></Link>
            </div>
            <hr/>
            <CommentComponent id={this.props.router.state.name}/>
          </div>
        </div>
    )
  }

  render (){
    return(
      <div>
        {this.renderItem()}
      </div>
    )
  } 
}

class Inform extends Component{
  render(){
      return(
          <div>
            <span className="badge rounded-pill bg-primary">{this.props.Name}</span>
            <span className="badge rounded-pill bg-secondary">{this.props.Date}</span>
          </div>
      )
  }
}


export default withRouter(PostDisplay);
