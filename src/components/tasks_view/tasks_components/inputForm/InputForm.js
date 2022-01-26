import React, {Component} from "react";
import inputForm from "./inputForm.module.scss";
import { connect } from "react-redux";
import tasksOperations from "../../../../redux/tasks/tasksOperations";
class InputForm extends Component{
    state = {
        name:"",
        number:"",
    }
    handleChangeName = e =>{
        this.setState({
            name: e.target.value,
        })
    }
    handleChangeNumber = e =>{
        this.setState({
            number: e.target.value,
        })
    }
    handleClick = () =>{
        //console.log(this.state.input);
        let state_ = {
          name: this.state.name,
          number: this.state.number,
        }
        this.props.onClick_(state_);
        this.setState({
          name: "",
          number: "",
        })
    }
    render(){
        let { name, number } = this.state;
        return(
          <div className={inputForm.container}>
            <div className={inputForm.groupContainer}>
              <p>User name:</p>
              <input 
                className={inputForm.inputEl}
                name ="name" 
                type ="text" 
                onChange={this.handleChangeName} 
                value = {name}></input>
            </div>
            <div className={inputForm.groupContainer}>
              <p>User number:</p>
              <input 
                className={inputForm.inputEl}
                name ="number" 
                type ="number" 
                onChange={this.handleChangeNumber} 
                value = {number}>
              </input>
            </div>
            <div className={inputForm.buttonDiv}>
              <button 
                className={inputForm.buttonAdmit}
                onClick={this.handleClick}
              >
              Add
              </button>
            </div>
          </div>
        )
    }
}
const mapDispatchToProps ={
  onClick_: tasksOperations.addTask,
}
export default connect(null, mapDispatchToProps)(InputForm);