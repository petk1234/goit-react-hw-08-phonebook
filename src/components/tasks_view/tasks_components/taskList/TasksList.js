import React, {Component} from "react";
import taskList from "./taskList.module.scss";
import TasksListEl from "../taskListEL/TaskListEl";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import transition from "./transition.module.scss";
export default class TasksList extends Component{
    render(){
        let filter = this.props.filter;
        // let tasks_new = this.props.tasks.filter((task, index) => (`${task.name}:${task.number}`.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
        // );

        let tasks_new = this.props.tasks.filter((task, index) =>{ 
          if(`${task.name}:${task.number}`.toLowerCase().indexOf(filter.toLowerCase()) !== -1){
            return task;
          }
        });
        console.log(tasks_new);
        
        // let obj_tasks ={
        //   tasks_new,
        // }
        return(
          // <ul className={taskList.container}>
          //    {
          //       this.props.tasks.map((task, index) =>
          //        <ul className={taskList.middleware} key={index}>
          //         {`${task.name}:${task.number}`.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && 
          //           (<TasksListEl key={index} id = {task.id} task={task}></TasksListEl>)    
          //         }
          //        </ul>
          //       )      
          //     }      
          // </ul>
          // let tasks = [];
          <TransitionGroup component='ul' className={taskList.container}>
             {
                tasks_new.map((task, index) =>
                 (<CSSTransition 
                   classNames={transition} 
                   timeout= {550}
                   key={index}>
                    {/* {`${task.name}:${task.number}`.toLowerCase().indexOf(filter.toLowerCase()) !== -1 &&  */}
                    {/* ( */}
                      <>
                      <TasksListEl key={index} id = {task.id} task={task}></TasksListEl>
                      </>
                 </CSSTransition>)
                )     
              }      
          </TransitionGroup>

        )
  }
}