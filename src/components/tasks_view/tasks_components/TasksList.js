import React, {Component, Fragment} from "react";
import TasksListEl from "./TaskListEl";
export default class TasksList extends Component{
    render(){
        let filter = this.props.filter;
        return(
          <ul>
             {
                this.props.tasks.map((task, index) =>
                 <Fragment key={index}>
                  {`${task.name}:${task.number}`.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && 
                    (<TasksListEl key={index} id = {task.id} task={task}></TasksListEl>)    
                  }
                 </Fragment>
                )      
              }      
          </ul>

        )
  }
}