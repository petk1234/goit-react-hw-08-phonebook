import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import routes from "../../routes/routes";
import registerOperations from "../../redux/registr/registerOperations";
import tasksActions from "../../redux/tasks/tasksActions";
class Logout extends Component{
    render(){
      console.log(this.props.token);
        return(
            <Fragment>
              {((this.props.isGetting=== false) || (this.props.isLoading=== false)) ?(
              <header>
                {this.props.token !== null ?( 
                  <Fragment>
                  <p>Log out {this.props.user_name}</p>
                  <div>
                    <button onClick={() =>{
                      this.props.logOut();
                      this.props.logOutTasks();
                    }}>Log out</button>
                  </div>
                  </Fragment>
                  ):
                  <Fragment>
                    <Link to={routes.register}>Register </Link>
                    <Link to={routes.login}>Log in </Link>
                  </Fragment>
                }
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
    isGetting: state.auth.getting,
  }
}

const mapDispatchToProps ={
  logOut: registerOperations.logoutUser,
  logOutTasks: tasksActions.logoutTasks,
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout)