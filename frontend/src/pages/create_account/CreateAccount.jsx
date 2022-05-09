import React from 'react';

class CreateAccount extends React.Component{
    render(){
        return(
            <div>
                <section className="transbox">
                <article>
                <PageTitle />
                <RegForm />
                </article>
                </section>
            </div>
        )
    }
}

class PageTitle extends React.Component{
    render(){
        return(
            <div className="transbox">
                <h1><b><u>CREATE ACCOUNT</u></b></h1>
            </div>
        )
    }
}

class RegForm extends React.Component{
    constructor(){
        super();
        this.state={
            userNameInput:"",
            gender:"",
            countryInput:"",
            schoolInput:"",
            passwordInput:"",
            rePasswordInput:"",
            passwordInputClass:"form-control",
            emailAddress:""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const{name, value} = event.target;
        this.setState({
            [name]: value
        })

        setTimeout(
            ()=>{
                this.state.passwordInput !== this.state.rePasswordInput ? 
                this.setState({passwordInputClass: "form-control is-invalid"})
                : this.setState({passwordInputClass: "form-control"})
            }, 50
        )
    }

    handleSubmit(event){
        event.preventDefault();
        alert("Please click the link sent to your email in order to complete sign up.")
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label>USER NAME</label>
                    <input 
                        name="userNameInput"
                        placeholder="user name"
                        type="text" 
                        className="form-control" 
                        value={this.state.userNameInput} 
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>GENDER</label>
                    <br/>
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="inlineRadio1" 
                        value="male" 
                        checked={this.state.gender==="male"}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="inlineRadio2" 
                        value="female"
                        checked={this.state.gender==="female"} 
                        onChange={this.handleChange}/>
                        <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="inlineRadio3" 
                        value="others" 
                        checked={this.state.gender==="others"}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">Others</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>COUNTRY</label>
                    <input 
                        name="countryInput"
                        placeholder="i.e. China"
                        type="text" 
                        className="form-control" 
                        value={this.state.countryInput} 
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>SCHOOL</label>
                    <input 
                        name="schoolInput"
                        placeholder="i.e. CUHK"
                        type="text" 
                        className="form-control" 
                        value={this.state.schoolInput} 
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>PASSWORD</label>
                    <input 
                        name="passwordInput"
                        type="password" 
                        className={this.state.passwordInputClass} 
                        placeholder="Set your password here" 
                        value={this.state.passwordInput} 
                        onChange={this.handleChange}/>
                </div>
                
                <div className="form-group">
                    <label>RETYPE YOUR PASSWORD</label>
                    <input 
                        name="rePasswordInput"
                        type="password" 
                        className={this.state.passwordInputClass}
                        placeholder="Retype to confirm your password" 
                        value={this.state.rePasswordInput} 
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        name="emailAddress"
                        type="email" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your email" 
                        value={this.state.emailAddress} 
                        onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary"
                        onClick={this.handleSubmit}>
                    Confirm
                </button>
            </form>
        )
    }
}

export default CreateAccount;