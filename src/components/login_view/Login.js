import React, {Component, Fragment} from 'react';
import LoginForm from './LoginForm';
import AuthError from '../auth_error/AuthError';
export default class LogIn extends Component{
    state ={
        email:"",
        password:"",
        activeUser:"",
    }
    render(){
        return(
            // <Fragment>
            // {this.props.error === '' ?
            // <>
            //   <p>It is Log in page</p>
            //   <LoginForm onClick_={this.handleClick_}></LoginForm>
            // </>
            // :
            // <AuthError></AuthError>
            // }
            // </Fragment>
            <AuthError>
                <LoginForm></LoginForm>
            </AuthError>
        )
    }
}