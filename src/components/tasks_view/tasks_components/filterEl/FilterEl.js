import React, {Component} from "react";
import filterEl from "./filterEl.module.scss";
import tasksActions from "../../../../redux/tasks/tasksActions";
import { connect } from "react-redux";
class FilterEl extends Component{
    handleChage = e =>{
        this.props.onChangeFilter(e.target.value);
    }
    render(){
        return(
          <div className={filterEl.outContainer}>
            <div className={filterEl.filterContainer}>
              <p className={filterEl.text}>Filter:</p>
              <input className={filterEl.filterEl} onChange={this.handleChage}></input>
            </div>
          </div>
        )
    }
}
const mapDispatchToProps ={
  onChangeFilter: tasksActions.filterAction,
}
export default connect(null, mapDispatchToProps)(FilterEl)