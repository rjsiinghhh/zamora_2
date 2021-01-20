import React, { Fragment } from 'react';
import './Schedule.css';
import AddSchedule from '../components/schedule/AddSchedule'
import Timeline from '../components/timeline/Timeline'

const Schedule = props => {
    return(
        <>
        <Fragment>
        
        <AddSchedule />
        <Timeline />
        </Fragment>
       
        </>
    )
}

export default Schedule;