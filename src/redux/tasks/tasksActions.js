import { createAction } from "@reduxjs/toolkit";
const addTaskRequest = createAction('add/taskRequest');
const addTaskSuccess = createAction('add/taskSuccess');
const addTaskError = createAction('add/taskError');

const deleteTaskRequest = createAction('delete/taskRequest');
const deleteTaskSuccess = createAction('delete/taskSuccess');
const deleteTaskError = createAction('delete/taskError');

const getTasksRequest = createAction('get/taskRequest');
const getTasksSuccess = createAction('get/taskSuccess');
const getTasksError = createAction('get/taskError');

const logoutTasks = createAction('logout/tasksSuccess', () =>{
    return{
        payload: [],
    }
});

const filterAction = createAction('filter', filter =>{
    return{
        payload: filter,
    }
});
export default{
    addTaskRequest,
    addTaskSuccess,
    addTaskError,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskError,
    getTasksRequest,
    getTasksSuccess,
    getTasksError,
    filterAction,
    logoutTasks
}