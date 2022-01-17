import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import user_reducers from './registr/registerReducers';
const store = configureStore({
    reducer: {
      auth: user_reducers,
    },
});
export default store;