import React, {Component} from 'react';
import InputForm from './tasks_components/InputForm';
import TasksList from './tasks_components/TasksList';
import FilterEl from './tasks_components/FilterEl';
export default class Tasks extends Component{
    state = {
        tasks: [],
        reserve_input:"",
        filter: "",
    }
    componentDidMount = () =>{
        let myStorage = window.localStorage;
        if(JSON.stringify(myStorage.getItem('tasks')).slice(1,-1).length > "".length){
          this.setState({
              tasks: JSON.stringify(myStorage.getItem('tasks')).slice(1, -1).split(','),
          })
        }
    }

    handleClick_ = (name_, number_) =>{
        //console.log(input);
        if( this.state.tasks.find(task => task==`${name_}: ${number_}`) == undefined){
          this.setState({
               tasks: this.state.tasks.concat(`${name_}: ${number_}`),     
          })
          localStorage.setItem('tasks',this.state.tasks.concat(`${name_}: ${number_}`));
        }
    }
    handleChangeFilter = filter_ =>{
       this.setState({
           filter: filter_,
       })
    }
    handleDelete = (id_) =>{
        console.log('id: ',id_);
        this.setState({
            tasks: this.state.tasks.filter((task, id) => id!==id_),
        })
        localStorage.setItem('tasks', this.state.tasks.filter((task, id) => id!==id_));
    }


    render(){
        let { tasks, reserve_input, filter } = this.state;
        return(
          <>
            <p>It is Tasks page</p>
            <InputForm onClick_={this.handleClick_}></InputForm>
            <FilterEl onChangeFilter = {this.handleChangeFilter}></FilterEl>
            <TasksList onClick_={this.handleDelete} tasks = {tasks} filter = {filter}></TasksList>
          </>
        )
    }
}