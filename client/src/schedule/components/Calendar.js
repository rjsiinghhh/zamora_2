import React, { useState }  from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';

import './Calendar.css'

const SCalendar = () => {
    const [date, setDate] = useState(new Date());


    const onChange = date => {
        setDate(date)
    }

    return(
        <>
        <div classname="calendar">
            <Calendar onChange={onChange} value={date} />
        </div>
        </>
    )
}

export default SCalendar;