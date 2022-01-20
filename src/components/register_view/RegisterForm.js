import React, {Component} from "react";
export default class RegisterForm extends Component{
    state ={
        name:"",
        email:"",
        password:"",
    }
    handleChangeName = e =>{
        this.setState({
            name:e.target.value,
        })
    }
    handleChangeEmail = e =>{
        this.setState({
            email:e.target.value,
        })
    }
    handleChangePassword = e =>{
        this.setState({
            password:e.target.value,
        })
    }
    handleClick = () =>{
        this.props.onClick_(this.state.name,this.state.email,this.state.password); 
    }
    render(){
        return(
          <>
            <p>Name</p>
            <input onChange={this.handleChangeName}></input>
            <p>Email</p>
            <input type="email" onChange={this.handleChangeEmail}></input>
            <p>Password</p>
            <input type="password" onChange={this.handleChangePassword}></input>
            <div>
              <button onClick={this.handleClick}>Add user</button>
            </div>
          </>
        )
    }
}
