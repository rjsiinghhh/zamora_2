import React from 'react';




const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.description}</p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;