import React, {Component} from "react";
import { connect } from "react-redux";
import tasksOperations from "../../../redux/tasks/tasksOperations";
class TasksListEl extends Component{
    handleClick = () =>{
        this.props.deleteEl(this.props.id);
    }
    render(){
      return( 
        <>
          <li>{`${this.props.task.name}:${this.props.task.number}`}</li>
          <button onClick={this.handleClick}>Delete</button>
        </>
      )
    }
}
const mapDispatchToProps ={
  deleteEl: tasksOperations.deleteTask,
}
export default connect(null, mapDispatchToProps)(TasksListEl)