import React, {Component, Fragment} from "react";
import TasksListEl from "./TaskListEl";
export default class TasksList extends Component{
    render(){
        let tasks = this.props.tasks;
        let filter = this.props.filter;
        return(
          <ul>
             {
                this.props.tasks.map((task, index) =>
                 <Fragment key={index}>
                  {task.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && 
                    (<TasksListEl key={index} onClick_={this.props.onClick_} id = {index} task={task}></TasksListEl>)    
                  }
                 </Fragment>
                )      
              }      
          </ul>

        )
  }
}