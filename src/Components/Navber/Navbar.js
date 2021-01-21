import React from 'react';
import './Navbar.css'
import logo from '../../images/logos/Group 1329.png';
import { Button } from '@material-ui/core';

const Navbar = () => {
  return (
    <div className="header">

      <div className="navbar-overlay">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid ">
            <img class="logo" src={logo} alt="" />
            <div class=" nav collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#donation">Donation</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#events">Events</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#blog">Blog</a>
                </li>
                <li>
                  <Button className="rgister-btn" variant="contained" color="primary">Register</Button>
                </li>
                <li>
                  <Button className="admin-btn" variant="contained" color="secondary">Admin</Button>
                </li>
              </ul>

            </div>
          </div>

        </nav>
        <div className="header-container ">
          <div className="header-content d-flex justify-content-center">
            <h2 className="header-heading">I grow by helping people in need.</h2>
          </div>
          <div className="d-flex justify-content-center">
            <input className="header-input" type="text" placeholder="Search..." />
            <Button className="header-btn" variant="contained" color="primary">Search</Button>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Navbar;