import React, { useContext, useEffect, useState } from 'react';
import './Details.css'
// import volunteerActivities from '../../fakeData/volunteerActivities';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Details = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [allEvents, setAllEvents] = useState([]);


    const handleAddEvents = () => {

    }


    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
            .then(res => res.json())
            .then(data => setAllEvents(data))
    }, [])
    console.log(allEvents);

    return (
        <div className="details-container">

            {

                allEvents.map(activity =>
                    <Link to={`/${activity._id}`}>
                        <Card className="activities" onClick={handleAddEvents}>
                            <CardActionArea>
                                <img src={activity.image} alt="" />
                            </CardActionArea>
                            <CardContent>
                                <Typography>
                                    <h2> {activity.title} </h2>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Link>
            )}

        </div>
    );
};

export default Details;