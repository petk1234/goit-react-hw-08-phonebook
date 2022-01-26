import React, {Component} from "react";
import { connect } from "react-redux";
import tasksOperations from "../../../../redux/tasks/tasksOperations";
import listEl from "./taskListEl.module.scss";
class TasksListEl extends Component{
    handleClick = () =>{
        this.props.deleteEl(this.props.id);
    }
    render(){
      return( 
          <li className={listEl.task}>
            {`${this.props.task.name}:${this.props.task.number}`}
            <button className={listEl.button} onClick={this.handleClick}></button>
          </li>
      )
    }
}
const mapDispatchToProps ={
  deleteEl: tasksOperations.deleteTask,
}
export default connect(null, mapDispatchToProps)(TasksListEl)