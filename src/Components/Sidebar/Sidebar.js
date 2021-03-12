import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="container">
            <div className="sidebar d-flex justify-content-between col-md-8 px-4">

                <ul className="list-unstyled">

                    <li className="">
                        <img src={logo} alt="" width="135px" />
                    </li>
                    <li>
                        <Link to="/admin" className="">
                             <span>Volunteer register list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addEvent" className="">
                         <span>Add Event</span>
                        </Link>
                    </li>    
   
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;