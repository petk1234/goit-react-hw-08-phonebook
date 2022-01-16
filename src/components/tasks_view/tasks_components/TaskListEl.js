import React, {Component} from "react";
export default class TasksListEl extends Component{
    handleClick = () =>{
        console.log(this.props.id);
        this.props.onClick_(this.props.id);
    }
    render(){
      return( 
        <>
          <li>{this.props.task}</li>
          <button onClick={this.handleClick}>Delete</button>
        </>
      )
    }
}