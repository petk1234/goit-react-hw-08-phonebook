import { combineReducers } from "redux";
import registrActions from "./registrActions";
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Alert } from "bootstrap";
const initialUserState = {name: null, email: null};
const initialErrorStructure = {type: ""};
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

const userGetInfo = (state, action) =>{
    console.log(action.payload);
    return action.payload;
}

const authFailed = (state, action) =>{
   console.log(action.type);
   return action.type;
}
const userAuthReducer = createReducer(initialUserState, {
    // [tasksActions.addTaskRequest.type]: (state,action) => action.payload[0].isLoading = false,
     [registrActions.registerUserSuccess.type]: userClickAuth,
     [registrActions.loginUserSuccess.type]: userClickAuth,
     [registrActions.logoutUserSuccess.type]: userClickLogout,
     [registrActions.getRegisterUserSuccess.type]: userGetInfo,
     //[tasksActions.getTaskSuccess.type]: getTaskSuccessOutside,
     //[tasksActions.deleteClickTyt.type]: deleteClickTytOutside,
     //[tasksActions.deleteTaskSuccess.type]: deleteTaskSuccessOutside,
 })
const userFailedAuthReducer = createReducer("",{
    [registrActions.loginUserError.type]: authFailed,
    [registrActions.registerUserError.type]: authFailed,
    [registrActions.closeNotice.type]: state => "",
})
const tokenAuthReducer = createReducer(null,{
    [registrActions.registerUserSuccess.type]: tokenClickAuth,
    [registrActions.loginUserSuccess.type]: tokenClickAuth,
    [registrActions.logoutUserSuccess.type]: () => null,
});

const userAuthWaiter = createReducer(false, {
    [registrActions.loginUserRequest.type]: () => true,
    [registrActions.loginUserSuccess.type]: () => false,
    [registrActions.loginUserError.type]: () => false, 
})

const userRefrestGetting = createReducer(false,{
    [registrActions.getRegisterUserRequest.type]: () => true,
    [registrActions.getRegisterUserSuccess.type]: () => false,
    [registrActions.getRegisterUserError.type]: () => false,
})
 export default combineReducers({
    auth_users: userAuthReducer,
    token_users: tokenAuthReducer,
    loading: userAuthWaiter,
    getting: userRefrestGetting,
    error: userFailedAuthReducer,
 });