import React, { useContext } from 'react';
import './Login.css'
import logo from '../../images/logos/Group 1329.png'
import google from '../../images/logos/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser);
    const handleGoogleSignIn = () => {
        
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((res) => {
                console.log(res)
                const user = {
                    email: res.user.email,
                    name: res.user.displayName, 
                    
                };
                setLoggedInUser(user);
                history.push("/register")
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
            });

    }

    return (
        
        <div className="login-container">
            <img className="logo" src={logo} alt="" />
            <div className="login-content">
                <h2>Login With</h2>
                <div className="google-sign-in" onClick={handleGoogleSignIn}>
                    <img className="google-logo" src={google} alt="" />
                    <h3>Continue with Google</h3>
                </div>
                <div className="account">
                    <p className="login-text">Don't have an account? <Link><span className="login-link">Create an account</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;