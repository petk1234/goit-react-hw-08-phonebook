import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import routes from "../../routes/routes";
import registerOperations from "../../redux/registr/registerOperations";
import tasksActions from "../../redux/tasks/tasksActions";
import userMenu from "./userMenu.module.scss";
class Logout extends Component{
    render(){
      console.log(this.props.token);
        return(
            <Fragment>
              {((this.props.isGetting=== false) || (this.props.isLoading=== false)) ?(
              <div className={userMenu.component}>
                {this.props.token !== null ?( 
                  <Fragment>
                  <p className={userMenu.p}>Welcome, {this.props.user_name}</p>
                  <div>
                    <a 
                      className={userMenu.refsActive}
                      onClick={() =>{
                        this.props.logOut();
                        this.props.logOutTasks();
                    }}>Log out</a>
                  </div>
                  </Fragment>
                  ):
                  <div className={userMenu.componentNotLogin}>
                    <Link className={userMenu.refs} to={routes.register}>Register </Link>
                    <Link className={userMenu.refs} to={routes.login}>Log in </Link>
                  </div>
                }
              </div>
              ):
               (<div className={userMenu.componentIsLoading}>
                  <span aria-hidden="true">🕙</span>
                  <p className={userMenu.op}>Loading</p>
                </div>)
              //  {/* () =>{ */}
              //   console.log('piiiiiiiidor');
              //   toast.loading('Authenticating...', { duration: 4000 });}
              // }
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