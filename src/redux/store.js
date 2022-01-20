import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducers from './registr/registerReducers';
import tasksReducers from './tasks/tasksReducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
let defaultMiddleWare = getDefaultMiddleware();
const authPersistConfig ={
  key: 'auth',
  storage,
  whitelist: ['token_users'],
}
export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducers),
      tasks: tasksReducers,
    },
    //middleware: [...defaultMiddleWare]
});
export const persistor = persistStore(store);