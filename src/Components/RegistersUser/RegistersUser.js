import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import logo from '../../images/logos/Group 1329.png';
import { Col, Row } from 'react-bootstrap';
import './RegistersUser.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navber/Navbar';

const RegistersUser = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(props.user);
    const deleteRegistersUser = (id) =>{
        console.log(id);
        fetch(`http://localhost:5000/deleteRegistersUser/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(data =>{
            console.log(data);
        })
    }
// console.log(props.user?.[0]._id);
    return (

        <div className="review-container">


            <div className="review-details">
                <div className="image">
                    <img src={props.user?.[0]?.image} alt="" />
                </div>
                <div className="review-content">
                    <h2>{props.user?.[0]?.title}</h2>
                    <h3>{props.user.checkIn}</h3>
                    {props.user?.[0]?._id}
                    <Button   onClick={()=>deleteRegistersUser(`${props.user?._id}`)} variant="contained" color="primary">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default RegistersUser;