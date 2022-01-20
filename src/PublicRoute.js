import { Route, Navigate, Routes } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
function PublicRoute({isAuthenticated, isRestricted, children}){
   return(
       isAuthenticated !== null && isRestricted ? <Navigate to='/tasks'/>
       : children
   )
}
const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token_users,
    }
}
export default connect(mapStateToProps, null)(PublicRoute);
