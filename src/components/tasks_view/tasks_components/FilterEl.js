import React, {Component} from "react";
export default class FilterEl extends Component{
    handleChage = e =>{
        this.props.onChangeFilter(e.target.value);
    }
    render(){
        return(
          <>
            <p>Filter</p>
            <input onChange={this.handleChage}></input>
          </>
        )
    }
}
// this.props.tasks.filter(task =>{
//     if(task === e.target.value){
       
//     }
// })