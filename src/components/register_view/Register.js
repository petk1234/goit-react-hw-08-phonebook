import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
export default class Register extends Component{
    state ={
        name:"",
        email:"",
        password:"",
        registr_users:[],
    }
    handleClick_ = (name_,email_,password_) =>{
        this.setState(prevState =>{
            return{
              name: name_,
              email: email_,
              password: password_,
              registr_users: prevState.registr_users.concat(`${name_} ${email_} ${password_}`),
            }
        })
    }
    render(){
        return(
            <>
              <p>It is register page</p>
              <RegisterForm onClick_ = {this.handleClick_}> </RegisterForm>
            </>
        )
    }
}