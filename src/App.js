import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Review/Review';
import Navbar from './Components/Navber/Navbar';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import VRegisterList from './Components/VRegisterList/VRegisterList';
import AddEvent from './Components/AddEvent/AddEvent';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] =useState({
    name: '',
    email: '',
  })

  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/:id">
            <Register></Register>
          </PrivateRoute>
         
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
