import React, {Component, Fragment} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserMenu from './components/header_logout/UserMenu'
import Home from './components/home_view/Home';
import LogIn from './components/login_view/Login';
import Register from './components/register_view/Register';
import Tasks from './components/tasks_view/Tasks';
import routes from './routes/routes';
import { connect } from 'react-redux';
import registerOperations from './redux/registr/registerOperations';
import tasksOperations from './redux/tasks/tasksOperations';
import HiddenRoute from './HiddenRoute';
import PublicRoute from './PublicRoute';
class App extends Component{
  componentDidMount = () =>{
     this.props.initialAuthMount();
     this.props.initialTasksMount();
  }
  render(){
  let { home, register, login, tasks } = routes;
  return (
    <div className="App">
        <Link to={home}>Home </Link>
        {this.props.isAuthorized !== null &&
         <Link to={tasks}>Tasks </Link>
        }
        {/* </div>{this.props.isAuthorized !== null && */}
        <UserMenu></UserMenu> 
         {/* } */}
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={login} element={<PublicRoute isRestricted={true}><LogIn /></PublicRoute>} />
          <Route path={register} element={<PublicRoute isRestricted={true}><Register /></PublicRoute>} />
          <Route path={tasks} element={<HiddenRoute><Tasks /></HiddenRoute>} />
        </Routes>
        {/* <HiddenRoute path="/tasks" element={<Tasks />} /> */}
    </div>
  );
}
}
const mapStateToProps = state =>{
  return{
    isAuthorized: state.auth.token_users,
  } 
}
const mapDispatchToProps ={
  initialAuthMount: registerOperations.getRegisterUser,
  initialTasksMount: tasksOperations.getTasks,
}
export default connect(mapStateToProps ,mapDispatchToProps)(App);
