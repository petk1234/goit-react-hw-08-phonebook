import React, {Component} from 'react';
import LoginForm from './LoginForm';
export default class LogIn extends Component{
    state ={
        email:"",
        password:"",
        activeUser:"",
    }
    handleClick_ = (email_, password_) =>{
       this.setState(prevState =>{
           return{
               email: email_,
               password: password_,
               activeUser: email_,
           }
       })
    }
    render(){
        return(
            <>
              <p>It is Log in page</p>
              <LoginForm onClick_={this.handleClick_}></LoginForm>
            </>
        )
    }
}