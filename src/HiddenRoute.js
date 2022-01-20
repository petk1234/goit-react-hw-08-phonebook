import { Route, Navigate, Routes } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
function HiddenRoute({isAuthenticated, children}){
    //  return(<p>BBBB</p>)
      console.log(children);
      return( 
            isAuthenticated !== null ? children
            :<Navigate to='/login' />
            )
        } 
const mapStateToProps = state =>{
  return{
      isAuthenticated: state.auth.token_users,
  } 
}
export default connect(mapStateToProps, null)(HiddenRoute); 