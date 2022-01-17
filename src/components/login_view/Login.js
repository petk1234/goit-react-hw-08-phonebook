import React, {Component} from 'react';
import LoginForm from './LoginForm';
import registerOperations from '../../redux/registr/registerOperations';
import { connect } from 'react-redux';
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
            <>
              <p>It is Log in page</p>
              <LoginForm onClick_={this.handleClick_}></LoginForm>
            </>
        )
    }
}

const mapDispatchToProps ={
    handleClick: registerOperations.loginUser,
}
export default connect(null, mapDispatchToProps)(LogIn)