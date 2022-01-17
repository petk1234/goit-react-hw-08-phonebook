import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import registerOperations from "../../redux/registr/registerOperations";
class Logout extends Component{
    render(){
      console.log(this.props.token);
        return(
            <Fragment>
              {this.props.isLoadig === false ?(
              <header>
                <p>Log out {this.props.user_name}</p>
                <div>
                  <button onClick={() =>{this.props.logOut();}}>Log out</button>
                </div>
              </header>
              ):
              (<p>Loading...</p>)
              }
            </Fragment>
        )
    }
}
const mapStateToProps = state =>{
  return{
    user_name: state.auth.auth_users.name,
    token: state.auth.token_users,
    isLoadig: state.auth.loading,
  }
}

const mapDispatchToProps ={
  logOut: registerOperations.logoutUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout)