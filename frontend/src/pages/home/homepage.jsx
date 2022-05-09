import React from 'react';
import {Link} from 'react-router-dom';
import { PathBar } from './pathBar';
import './home.css';
import axios from "axios";

class Home extends React.Component {
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
        axios
          .get(" http://localhost:8000/post/items/")
          .then((res) => this.setState({ itemList: res.data }))
          .catch((err) => console.log(err));
      };

    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.itemList.filter(
          (item) => item.complete === viewCompleted
        );
    
        return newItems.map((item) => (
        <div className="col-4 p-4">
            <div className="card">
                <Link to={"/PostShow"} state={{name: item.id}}>
                    <img src={item.image} alt="itemImage" className="w-100 p-3" />
                </Link>
                <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                    <p className="card-text text-secondary">{item.author}</p>

                </div>
            </div>
        </div>
        ));
    };

    render = () => {
        return (
        <div>
            {/*search bar*/}
            <div className="fixed-top">
                <nav className="navbar navbar-expand-sm navbar-light bg-light px-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='#'>BALLDOG</a>
                        <div className="collapse navbar-collapse flex-row-reverse" id="mynavbar">
                            <form className="d-flex">
                                <input className="form-control m-4" type="text" placeholder="Search" />
                                <button className="btn btn-primary" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="tbox">
            {/*type bar*/}
            <div className="container">
            <div className="row text-center">
                <div className="col p-4">
                    <div className="card">
                        <img src={require('./img/onSale.png')} alt="on sale" className="w-100 p-2" />
                        <div className="card-body">
                            <h4 className="card-title">On Sale</h4>
                        </div>
                    </div>
                </div>
                <div className="col p-4">
                    <div className="card">
                        <img src={require('./img/seekSale.png')} alt="seek sale" className="w-100 p-2" />
                        <div className="card-body">
                            <h4 className="card-title">Seek Sale</h4>
                        </div>
                    </div>
                </div>
                <div className="col-2 p-4">
                    <div className="container">
                    <div className="d-grid btn-group-vertical">
                        <button type="button" className="btn btn-primary">Food</button>
                        <button type="button" className="btn btn-primary">Book</button>
                        <button type="button" className="btn btn-primary">Sports</button>
                        <button type="button" className="btn btn-primary">Others</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            {/*random items*/}
            <hr/>
            <div className="container">
                <div className="row text-center">
                    {this.renderItems()}
                </div>
            </div>
        </div>
        <PathBar />
        </div>
        );
    }
 }

 export default Home;

