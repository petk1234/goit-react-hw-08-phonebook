import { combineReducers } from "redux";
import tasksActions from "./tasksActions";
import { createReducer } from '@reduxjs/toolkit';

const addTask = (state, action) =>{
    return state.concat(action.payload);
}
const deleteTask = (state, action) =>{
    return state.filter(task => task.id !== action.payload );
}
const getTasks = (state, action) =>{
    return action.payload;
}
const logoutTasks = (state, action) =>{
    return action.payload;
}
const filterEl = (state, action) =>{
    return action.payload;
}
const taskReducer = createReducer([],{
    [tasksActions.addTaskSuccess.type]: addTask,
    [tasksActions.deleteTaskSuccess.type]: deleteTask,
    [tasksActions.getTasksSuccess.type]: getTasks,
    [tasksActions.logoutTasks.type]: logoutTasks,
});
const filterReducer = createReducer("",{
    [tasksActions.filterAction.type]: filterEl,
})

export default combineReducers({
    tasks: taskReducer,
    filter: filterReducer,
});