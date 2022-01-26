import React, {Component} from "react";
import inputForm from "../tasks_view/tasks_components/inputForm/inputForm.module.scss";
import registerOperations from "../../redux/registr/registerOperations";
import { connect } from "react-redux";
class RegisterForm extends Component{
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
      console.log('handleClick_');
      const state_ = {
         password: this.state.password,
         email: this.state.email,
         name: this.state.name,
      }
      this.props.handleClick_(state_);
    }
    render(){
        return(
          <>
            <div className={inputForm.groupContainer}>
              <p>Name:</p>
              <input onChange={this.handleChangeName}></input>
            </div>
            <div className={inputForm.groupContainer}>
              <p>Email:</p>
              <input type="email" onChange={this.handleChangeEmail}></input>
            </div>
            <div className={inputForm.groupContainer}>
              <p>Password:</p>
              <input type="password" onChange={this.handleChangePassword}></input>
            </div>
            <div>
              <button className={inputForm.buttonAdmit} onClick={this.handleClick}>Add user</button>
            </div>
          </>
        )
    }
}
const mapDispatchToProps = {
    handleClick_: registerOperations.addUser
}
export default connect(null, mapDispatchToProps)(RegisterForm);