import React from 'react';


import './Schedule.css';
import SCalendar from '../components/Calendar'

const Schedule = props => {
    return(
        <>
        <SCalendar />
        <h1> Schedule type stuff here</h1>
        <h3>will call to the api i built in the backend DATE and DESCRIPTION</h3>
        
        </>
    )
}

export default Schedule;