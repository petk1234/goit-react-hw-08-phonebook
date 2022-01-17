import { combineReducers } from "redux";
import registrActions from "./registrActions";
import { createReducer } from '@reduxjs/toolkit';
const initialUserState = {name: null, email: null};
const userClickAuth = (state, action) =>{
    console.log('oh shit');
    return action.payload.user
}

const tokenClickAuth = (state, action) =>{
    return action.payload.token;
}

const userClickLogout = (state, action) =>{
    return initialUserState;
}
const userAuthReducer = createReducer(initialUserState, {
    // [tasksActions.addTaskRequest.type]: (state,action) => action.payload[0].isLoading = false,
     [registrActions.registerUserSuccess.type]: userClickAuth,
     [registrActions.loginUserSuccess.type]: userClickAuth,
     [registrActions.logoutUserSuccess.type]: userClickLogout,
     //[tasksActions.getTaskSuccess.type]: getTaskSuccessOutside,
     //[tasksActions.deleteClickTyt.type]: deleteClickTytOutside,
     //[tasksActions.deleteTaskSuccess.type]: deleteTaskSuccessOutside,
 })

const tokenAuthReducer = createReducer("",{
    [registrActions.registerUserSuccess.type]: tokenClickAuth,
    [registrActions.loginUserSuccess.type]: tokenClickAuth,
    [registrActions.logoutUserSuccess.type]: () => "",
});

const userAuthWaiter = createReducer(false, {
    [registrActions.loginUserRequest.type]: () => true,
    [registrActions.loginUserSuccess.type]: () => false,
    [registrActions.loginUserError.type]: () => false, 
})
 export default combineReducers({
    auth_users: userAuthReducer,
    token_users: tokenAuthReducer,
    loading: userAuthWaiter,
 });