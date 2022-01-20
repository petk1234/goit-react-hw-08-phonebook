import React, {Component, Fragment} from 'react';
import LoginForm from './LoginForm';
import registerOperations from '../../redux/registr/registerOperations';
import { connect } from 'react-redux';
import AuthError from '../auth_error/AuthError';
class LogIn extends Component{
    state ={
        email:"",
        password:"",
        activeUser:"",
    }
    handleClick_ = (email_, password_) =>{
      let state_={
          email: email_,
          password: password_,
          isLoading: false,
      }
      this.props.handleClick(state_);
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
                <LoginForm onClick_={this.handleClick_}></LoginForm>
            </AuthError>
        )
    }
}

const mapStateToProps = state =>{
    return{
        error: state.auth.error,
    }
}
const mapDispatchToProps ={
    handleClick: registerOperations.loginUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)