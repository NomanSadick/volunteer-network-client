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
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
      
          <PrivateRoute path="/:id">
            <Register></Register>
          </PrivateRoute>
          <Route path="/">
            <Header></Header>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
