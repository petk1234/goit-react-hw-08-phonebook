import React, {Component, Fragment} from 'react';
import InputForm from './tasks_components/inputForm/InputForm';
import TasksList from './tasks_components/taskList/TasksList';
import FilterEl from './tasks_components/filterEl/FilterEl';
import { connect } from 'react-redux';
import tasksOperations from '../../redux/tasks/tasksOperations';
import tasksActions from '../../redux/tasks/tasksActions';
import registerOperations from '../../redux/registr/registerOperations';
class Tasks extends Component{
    state = {
        tasks: [],
        reserve_input:"",
        filter: "",
    }

    render(){
        //let { tasks, reserve_input, filter } = this.state;
        return(
          <Fragment>
            <h1>Tasks page</h1>
            <InputForm></InputForm>
            <FilterEl></FilterEl>
            {/* {this.props.token !== null && */}
              <TasksList 
                  tasks = {this.props.tasks} 
                  filter = {this.props.filter}>  
               </TasksList>
             {/* } */}
          </Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return{
        tasks: state.tasks.tasks,
        filter: state.tasks.filter,
        token: state.auth.token_users,
    }
}
const mapDispatchToProps ={
   handleClick: tasksOperations.addTask,
   handleClickAll: tasksOperations.getTasks,
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks) 