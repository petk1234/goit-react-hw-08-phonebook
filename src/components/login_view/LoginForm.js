import React, { Component } from "react";
export default class LoginForm extends Component{
    state ={
        email: "",
        password: "",
    }
    handleChangeEmail = e =>{
        this.setState({
            email: e.target.value,
        })
    }
    handleChangePassword = e =>{
        this.setState({
            password: e.target.value,
        })
    }
    handleClick = () =>{
        this.props.onClick_(this.state.email, this.state.password);
    }
    render(){
        return(
          <>
            <p>Email</p>
            <input onChange={this.handleChangeEmail}></input>
            <p>Password</p>
            <input type="email" onChange={this.handleChangePassword}></input>
            <div>
              <button onClick={this.handleClick}>Log in user</button>
            </div>
          </>
        )
    }
}