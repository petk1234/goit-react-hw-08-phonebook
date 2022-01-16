import React, {Component} from "react";
export default class InputForm extends Component{
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
        this.setState({
            name: "",
            number: "",
        })
        this.props.onClick_(this.state.name, this.state.number);
    }
    render(){
        let { name, number } = this.state;
        return(
          <>
            <p>User name</p>
            <input onChange={this.handleChangeName} value = {name}></input>
            <p>User number</p>
            <input onChange={this.handleChangeNumber} value = {number}></input>
            <button onClick={this.handleClick}>Add user</button>
          </>
        )
    }
}