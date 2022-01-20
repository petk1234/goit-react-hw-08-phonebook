import axios from "axios";
import registrActions from "./registrActions";
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
const token ={
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    }
}

const addUser = credentials => dispatch =>{
    dispatch(registrActions.registerUserRequest());
    console.log(credentials);
    axios.post('/users/signup', credentials)
    .then(res => res.data)
    .then(data =>{
        console.log(data);
        token.set(data.token);
        dispatch(registrActions.registerUserSuccess(data));
    })
    .catch(error =>{
        console.log(error);
        dispatch(registrActions.registerUserError());
    })
}

const loginUser = credentials => dispatch =>{
    dispatch(registrActions.loginUserRequest(credentials.isLoading));
    console.log(credentials);
    axios.post('/users/login', credentials)
    .then(res => res.data)
    .then(data =>{
        console.log(data);
        token.set(data.token);
        dispatch(registrActions.loginUserSuccess(data));
    })
    .catch(error =>{
        console.log(error);
        dispatch(registrActions.loginUserError(error.type));
    })
}

const logoutUser = () => dispatch =>{
   dispatch(registrActions.logoutUserRequest());
   axios.post('/users/logout')
   .then(() =>{
       //token.unset();
       dispatch(registrActions.logoutUserSuccess());
   })
   .catch(error =>{
       dispatch(registrActions.logoutUserError(error));
   })
}

const getRegisterUser = () => (dispatch, getState) =>{
    console.log(getState());
    let{
        auth:{
            token_users,
        }
    } = getState(); // деструктуризация (по аналогии с let {name, number, filter} = this.state), но просто с вложенностью
    console.log(token_users);
    if(token_users === null){
        console.log("pusto");
    }
    else{
        token.set(token_users);
        dispatch(registrActions.getRegisterUserRequest());
        axios.get('/users/current')
        .then(res => res.data)
        .then(data =>{
            dispatch(registrActions.getRegisterUserSuccess(data));
        })
        .catch(error =>{
            dispatch(registrActions.getRegisterUserError(error));
        });
    }
}
export default {addUser, loginUser, logoutUser, getRegisterUser};