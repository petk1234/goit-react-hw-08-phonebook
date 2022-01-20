import axios from "axios";
import tasksActions from './tasksActions';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
const addTask = task => dispatch =>{
   dispatch(tasksActions.addTaskRequest());
   axios.post('/contacts', task)
   .then(res => res.data)
   .then(data =>{
       console.log(data);
       dispatch(tasksActions.addTaskSuccess(data));
   })
   .catch(error =>{
       console.log(error);
       dispatch(tasksActions.addTaskError(error))
    });
}

const deleteTask = task_id =>dispatch =>{
    dispatch(tasksActions.deleteTaskRequest());
    axios.delete(`/contacts/${task_id}`)
    .then(() =>{
        dispatch(tasksActions.deleteTaskSuccess(task_id));
    })
    .catch(error =>{
        dispatch(tasksActions.deleteTaskError(error));
    });
}

const getTasks = () => (dispatch, getState) =>{
    let{
        auth:{
           token_users,
        }
    } = getState();
    if(token_users === null){
        console.log('pustox2');
    }
    else{
      dispatch(tasksActions.getTasksRequest());
      axios.get('/contacts')
      .then(res => res.data)
      .then(data =>{
          dispatch(tasksActions.getTasksSuccess(data));
      })
      .catch(error =>{
          dispatch(tasksActions.getTasksError(error));
      });
    }
}
export default{
    addTask,
    deleteTask,
    getTasks,
}