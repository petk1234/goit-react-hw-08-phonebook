import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserMenu from './components/header_logout/UserMenu'
import Home from './components/home_view/Home';
import LogIn from './components/login_view/Login';
import Register from './components/register_view/Register';
import Tasks from './components/tasks_view/Tasks';
import routes from './routes/routes';
function App() {
  let { home, register, login, tasks } = routes;
  return (
    <div className="App">
        <Link to={home}>Home </Link>
        <Link to={register}>Register </Link>
        <Link to={login}>Log in </Link>
        <Link to={tasks}>Tasks </Link>
        <UserMenu></UserMenu> 
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={login} element={<LogIn />} />
          <Route path={register} element={<Register />} />
          <Route path={tasks} element={<Tasks />} />
        </Routes>
    </div>
  );
}

export default App;
