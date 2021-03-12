import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navber/Navbar';
import './Header.css'


const Header = () => {
    return (
        <div className="header-container">
            <div className="header-overlay">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>

        </div>
    );
};

export default Header;