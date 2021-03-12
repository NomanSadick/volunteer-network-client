import React from 'react';
import './Navbar.css'
import { Button } from '@material-ui/core';
import logo from '../../images/logos/Group 1329.png';
import { Link, useHistory } from 'react-router-dom';



const Navbar = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/admin");
  }
  return (
    <div className="header">
      <div className="navbar-overlay">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid ">
            <img class="logo" src={logo} alt="" />
            <div class=" nav collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#donation">Donation</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#events">Events</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#blog">Blog</Link>
                </li>
                <li>
                  <Button className="rgister-btn" variant="contained" color="primary">Register</Button>
                </li>
                <li>
                  <Button className="admin-btn" onClick={handleClick} variant="contained" color="secondary">Admin</Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


    </div>

  );
};

export default Navbar;