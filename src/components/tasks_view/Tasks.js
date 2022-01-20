import React, {Component, Fragment} from 'react';
import InputForm from './tasks_components/InputForm';
import TasksList from './tasks_components/TasksList';
import FilterEl from './tasks_components/FilterEl';
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

    handleClick_ = (name_, number_) =>{
        let state_ = {
            name: name_,
            number: number_,
        }
        this.props.handleClick(state_);
    }
    handleChangeFilter = filter_ =>{
       this.props.handleFilter(filter_);
    }
    handleClickAll_ = () =>{
        this.props.handleClickAll();
    }

    render(){
        //let { tasks, reserve_input, filter } = this.state;
        return(
          <Fragment>
            <p>It is Tasks page</p>
            <InputForm onClick_={this.handleClick_}></InputForm>
            <FilterEl onChangeFilter = {this.handleChangeFilter}></FilterEl>
            {this.props.token !== null &&
              (<TasksList 
                  tasks = {this.props.tasks} 
                  filter = {this.props.filter}>  
               </TasksList>)
            }
            <button onClick={this.props.handleClickAll}>All tasks</button>
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
   handleFilter: tasksActions.filterAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks) 