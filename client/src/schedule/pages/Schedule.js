import React, { Fragment } from 'react';
import './Schedule.css';
import AddtoTimeline from '../components/timeline/AddtoTimeline'
import Timeline from '../components/timeline/Timeline'

const Schedule = props => {
    return(
        <>
        <Fragment>
        
        <AddtoTimeline />
        <Timeline />
        </Fragment>
       
        </>
    )
}

export default Schedule;