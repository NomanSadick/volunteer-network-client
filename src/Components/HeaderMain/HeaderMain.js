import React from 'react';
import { Button } from '@material-ui/core';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="">
                <div className="header-content d-flex justify-content-center">
                    <h2 className="header-heading">I grow by helping people in need.</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <input className="header-input" type="text" placeholder="Search..." />
                    <Button className="header-btn" variant="contained" color="primary">Search</Button>
                </div>
            </div>


        </div>
    );
};

export default HeaderMain;