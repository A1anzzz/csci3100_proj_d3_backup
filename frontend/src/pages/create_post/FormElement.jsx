import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, Image} from 'react-bootstrap';
import axios from "axios";
import moment from "moment";
import {
    useNavigate,
  } from "react-router-dom";

export function SignupForm() {
    let navigate = useNavigate();
  
    async function Jump(event) {
      event.preventDefault();
      navigate("/", { replace: true });
    }
  
    return <FormElement onSubmit={Jump} />;
}

class FormElement extends Component{
    constructor(props){
        super(props);
        this.state={
                title: "" , 
                author: "lls" ,
                describe: "" ,
                price: "" , 
                itemType: "" , 
                location: "" , 
                postDate: "" , 
                tradeType: "",
                image:"http://localhost:8000/media/PostImage/add1.png",
                complete: false,
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.setState(
            {postDate: moment().format("YYYY-MM-DD") }
            )
    }

    handleChange(event){
        const{name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        let item=this.state;
        if (item.id) {
            axios
                .put(process.env.REACT_APP_API+'post/items/', item)
                .then((res) => alert("You have already edit a post."),
                (error)=>alert("Failed."))
                .then(()=>this.props.Jump);
                return;
            }
            axios
            .post(process.env.REACT_APP_API+'post/items/', item)
            .then((res) => alert("You have already make a post."),
            (error)=>alert("Failed."))
            ;
    }

    handleFileSelected(event){
        event.preventDefault();
        
        const formData=new FormData();
        formData.append('title','hh');
        formData.append('content','hh');
        formData.append('file',event.target.files[0]);

        axios
        .post(process.env.REACT_APP_API+"post/postImages/", formData)
        .then( (result)=>this.setState({image: result.data.file}) )
        .then( ()=> {
            alert('Your picture is uploaded successfully!')},
        (error)=>{
            alert('Failed');
        });
    };

    pic(item){
        return(
            <div className="card" style={{width:"50%"}}>
                <Image src={item} alt="postImage" className="card-img-top" />
            </div>
        );
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label htmlFor="tradeType">Trade Type</label>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="tradeType" 
                            id="inlineRadio1" 
                            value="b" 
                            checked={this.state.tradeType==="b"}
                            onChange={this.handleChange}/>
                            <label className="form-check-label"><small>Want to Buy</small></label>
                        </div>
                        <div className="form-check">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="tradeType" 
                            id="inlineRadio2" 
                            value="s" 
                            checked={this.state.tradeType==="s"}
                            onChange={this.handleChange}/>
                            <label className="form-check-label"><small>Want to Sell</small></label>
                        </div>
                    </div>   
                </div>

                <div className="form-group">
                    <label htmlFor="item-title">Title</label>
                    <input 
                        name="title"
                        id="item-title"
                        type="text" 
                        className="form-control" 
                        value={this.state.title} 
                        onChange={this.handleChange}
                        placeholder="Enter Post Title"
                        />
                </div>
                <br/>

                <div className="form-group">
                    <label>Price</label>
                    <input 
                        name="price"
                        placeholder="e.g. 50 hkd/40 rmb"
                        type="text" 
                        className="form-control" 
                        value={this.state.price} 
                        onChange={this.handleChange}/>
                </div>
                <br/>
                <div className="form-group">
                    <label>Trade Location</label>
                    <input 
                        name="location"
                        placeholder="e.g. college"
                        type="text" 
                        className="form-control" 
                        value={this.state.location} 
                        onChange={this.handleChange}/>
                </div>
                <br/>

                <div className="row">
                    <label htmlFor="itemType">Item Type</label>
                    <div>
                        <input 
                        type="radio"
                        className="btn-check" 
                        id="type1" 
                        name="itemType"
                        value="food" 
                        checked={this.state.itemType==="food"}
                        onChange={this.handleChange}
                        autoComplete="off"/>
                        <label className="btn btn-outline-primary" 
                        htmlFor="type1">Food</label>

                        <input 
                        type="radio"
                        className="btn-check" 
                        id="type2" 
                        name="itemType"
                        value="book" 
                        checked={this.state.itemType==="book"}
                        onChange={this.handleChange}
                        autoComplete="off"/>
                        <label className="btn btn-outline-primary" 
                        htmlFor="type2">Book</label>

                        <input 
                        type="radio" 
                        className="btn-check" 
                        id="type3" 
                        name="itemType"
                        value="sports" 
                        checked={this.state.itemType==="sports"}
                        onChange={this.handleChange}
                        autoComplete="off"/>
                        <label className="btn btn-outline-primary" 
                        htmlFor="type3">Sports</label>

                        <input 
                        type="radio" 
                        className="btn-check" 
                        id="type4" 
                        name="itemType"
                        value="others" 
                        checked={this.state.itemType==="others"}
                        onChange={this.handleChange}
                        autoComplete="off"/>
                        <label className="btn btn-outline-primary" 
                        htmlFor="type4">Others</label>
                    </div>   
                </div>
                <br/>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        name="describe"
                        type="text" 
                        className="form-control" 
                        value={this.state.description} 
                        onChange={this.handleChange}/>
                </div>
                <br/>

                <div className="container">                    
                    <label>Image</label>
                    <br/>
                    {this.pic(this.state.image)}
                    <input onChange={this.handleFileSelected} type='File' accept='image/*'/>
                </div>

                <br/>

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary text-center"
                            onClick={this.handleSubmit}>
                        Post Now!
                    </button>
                </div>

            </div>
        )
    }
}