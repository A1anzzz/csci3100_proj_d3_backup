import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <section className="transbox">
                <article>
                <PageTitle />
                <EmailPwForm />
                </article>
                </section>
            </div>
        )
    }
}

class PageTitle extends React.Component{
    render(){
        return(
            <div>
                <div className="transbox">
                    <h1><i><b><u>BallDog</u></b></i></h1>
                </div>
            </div>
        )
    }
}

class EmailPwForm extends React.Component{
    constructor(){
        super();
        this.state={
            emailAddress: "",
            passwordInput: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="emailAddress"
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    value={this.state.emailAddress} 
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="passwordInput"
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
                    value={this.state.passwordInput} 
                    onChange={this.handleChange}/>
                </div>
                <div className="register">
                    <small className="form-text text-muted">Do not have an account yet? <a href="about:blank" target={"_blank"} className="nav-link">Register here!</a></small>
                </div>
                <div className="forget">
                    <small className="form-text text-muted">Forget your password? <a href="about:blank" target={"_blank"} className="nav-link">Click me!</a></small>    
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        )
    }
}

export default Login;