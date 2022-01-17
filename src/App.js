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
class App extends Component{
  render(){
  let { home, register, login, tasks } = routes;
  return (
    <div className="App">
        <Link to={home}>Home </Link>
        <Link to={register}>Register </Link>
        <Link to={login}>Log in </Link>
        <Link to={tasks}>Tasks </Link>
        {this.props.token !== "" &&
            (<UserMenu></UserMenu>) 
        }
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={login} element={<LogIn />} />
          <Route path={register} element={<Register />} />
          <Route path={tasks} element={<Tasks />} />
        </Routes>
    </div>
  );
}
}
const mapStateToProps = state =>{
  return{
    token: state.auth.token_users,
  } 
}
export default connect(mapStateToProps ,null)(App);
