import { createAction } from "@reduxjs/toolkit";
const registerUserRequest = createAction('register/addRequest');
const registerUserSuccess = createAction('register/addSuccess');
const registerUserError = createAction('register/error');

const loginUserRequest = createAction('login/addRequest');
const loginUserSuccess = createAction('login/addSuccess');
const loginUserError = createAction('login/addError');

const logoutUserRequest = createAction('logout/addRequest');
const logoutUserSuccess = createAction('logout/addSuccess');
const logoutUserError = createAction('logout/addError');

const getRegisterUserRequest = createAction('getregister/request');
const getRegisterUserSuccess = createAction('getregister/success');
const getRegisterUserError = createAction('getregister/error');

export default{
    registerUserRequest,
    registerUserSuccess,
    registerUserError,
    loginUserRequest,
    loginUserSuccess,
    loginUserError,
    logoutUserRequest,
    logoutUserSuccess,
    logoutUserError,
    getRegisterUserRequest,
    getRegisterUserSuccess,
    getRegisterUserError,
}