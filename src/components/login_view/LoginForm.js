import React, { Component } from "react";
import inputForm from "../tasks_view/tasks_components/inputForm/inputForm.module.scss";
import { connect } from "react-redux";
import registerOperations from "../../redux/registr/registerOperations";
class LoginForm extends Component{
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
        let state_={
          email: this.state.email,
          password: this.state.password,
          isLoading: false,
        }
        this.props.onClick_(state_);
        this.setState({
            email: "",
            password: "",
        })
    }
    render(){
        let {email, password} = this.state;
        return(
          <>
            <div className={inputForm.groupContainer}>
              <p>Email:</p>
              <input onChange={this.handleChangeEmail} value={email}></input>
            </div>
            <div className={inputForm.groupContainer}>
              <p>Password:</p>
              <input type="email" onChange={this.handleChangePassword} value={password}></input>
            </div>
            <div>
              <button className={inputForm.buttonAdmit} onClick={this.handleClick}>Log in user</button>
            </div>
          </>
        )
    }
}

const mapDispatchToProps ={
  onClick_: registerOperations.loginUser,
}
export default connect(null, mapDispatchToProps)(LoginForm)