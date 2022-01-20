import React, {Component, Fragment} from 'react';
import RegisterForm from './RegisterForm';
import { connect } from "react-redux";
import AuthError from '../auth_error/AuthError';
import registerOperations from '../../redux/registr/registerOperations';
class Register extends Component{
    state ={
        name:"",
        email:"",
        password:"",
        registr_users:[],
    }
    handleClick_ = (name_,email_,password_) =>{
        // this.setState(prevState =>{
        //     return{
        //       name: name_,
        //       email: email_,
        //       password: password_,
        //       registr_users: prevState.registr_users.concat(`${name_} ${email_} ${password_}`),
        //     }
        // })
        console.log('handleClick_');
        const state_ = {
           password: password_,
           email: email_,
           name: name_,
        }
        this.props.handleClick(state_);
    }
    render(){
        return(
            // <Fragment>
            // {this.props.error === '' ?
            // <>
            //   <p>It is Register page</p>
            //   <RegisterForm onClick_ = {this.handleClick_}> </RegisterForm>
            // </>
            // :
            // <AuthError></AuthError>
            // }
            // </Fragment>
             <AuthError>
                 <RegisterForm onClick_ = {this.handleClick_}> </RegisterForm>
             </AuthError>
        )
    }
}
const mapStateToProps = state =>{
    return{
        error: state.auth.error,
    }
}
const mapDispatchToProps = {
      handleClick: registerOperations.addUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);