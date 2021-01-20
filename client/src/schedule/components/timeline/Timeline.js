import React from 'react';
import TimelineItem from './TimelineItem';
import timelineData from './TimelineData';
import './Timeline.css';


const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );



export default Timeline;