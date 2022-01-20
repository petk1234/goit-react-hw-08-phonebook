import { connect } from "react-redux";
import React, {Component, Fragment} from 'react';
import registrActions from "../../redux/registr/registrActions";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
class AuthError extends Component{
    handleClose = () =>{
        this.props.handleClose_();
    }
    render(){
    console.log(this.props.error);
    // console.log(this.props.children.type.name);
    return(
        //<p>It is an {this.props.error} </p>
        // <Alert variant='danger' style={{ width: "42rem" }}>
        //         <Alert.Heading>
        //           Oh shit you've got an {{...props}.error}
        //         </Alert.Heading>
        //          {/* <p>{this.props.error.payload}</p> */}
        // </Alert>

        <>
            {this.props.error === '' ?
            <>
              <p>It is {this.props.children.type.name} page</p>
              {this.props.children}
            </>
            :
            <>
              <p>It is {this.props.children.type.name} page</p>
              {this.props.children}
              <div>
                <p>It is an {this.props.error} </p>
                <button onClick={this.handleClose}>well</button>
              </div>
            </>
            }
        </>
    )
}
}
const mapStateToProps = state =>{
    return{
        error: state.auth.error
    }
}
const mapDispatchToProps ={
   handleClose_: registrActions.closeNotice,
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthError)