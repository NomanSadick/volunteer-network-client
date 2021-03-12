import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navber/Navbar';
import RegistersUser from '../RegistersUser/RegistersUser';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [registerUser, setRegisterUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allRegUser?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setRegisterUser(data));
    }, [])
    console.log(registerUser);
    return (
        <>
            <Navbar></Navbar>
            <div className="row">

                {
                    registerUser.map(user => <RegistersUser user={user}></RegistersUser>
                        //    <li><h3>{ (user?.[0]?.title) }</h3></li>


                    )
                }
            </div>
        </>
    );
};

export default Review;