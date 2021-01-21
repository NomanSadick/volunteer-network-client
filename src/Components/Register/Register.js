import { Button, Grid, GridListTileBar, Link, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/Group 1329.png'
import './Register.css'
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';

const Register = () => {
  const { id } = useParams()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [event, setEvent] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:5000/getEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(data => setEvent(data))

  }, [])
  console.log(event[0]);

  const [selectedDate, setSelectedDate] = useState({
     checkIn: new Date(),
  });
  

  const handleDateChange = (date) => {
    const newDate = {...selectedDate}
    newDate.checkIn = date;
    setSelectedDate(newDate);
  };
  console.log(loggedInUser);

  const handleRegistration = () => {
    const volunteerUser = {...loggedInUser, ...event, ...selectedDate}
    fetch('http://localhost:5000/addRegVolunteer', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(volunteerUser)
    })
    .then(res => res.json())
    .then(data => {
      if (data) {
        alert("Your data is succesfully")
      }
    })
    history.push("/review")
  }
  return (
    <div className="register-container" >
      <img className="logo" src={logo} alt="" />
      <div className="register-content">
        <h3 className="register-heading">Register as a Volunteer</h3>

        <TextField className="register-input" defaultValue={loggedInUser.name} id="standard-basic" label="Full Name" />
        <TextField className="register-input" defaultValue={loggedInUser.email} id="standard-basic" label="Username or Email" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              className="register-input"
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={selectedDate.checkIn}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <TextField className="register-input" id="standard-basic" label="Write a description" />
        <TextField className="register-input" value={event[0] && event[0].title} id="standard-basic" />
        
          <Button 
            onClick={handleRegistration}
            className="register-input registration-btn"
            variant="contained"
            color="secondary">
            Registration
            
          </Button>
        
      </div>
    </div>
  );
};

export default Register;