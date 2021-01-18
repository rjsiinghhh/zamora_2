import React, { useState }  from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import Card from '../../components/UIElements/Card';
import './Calendar.css'

const SCalendar = () => {
    const [date, setDate] = useState(new Date());


    const onChange = date => {
        setDate(date)
    }

    return(
        <>
        <Card>
        <div classname="calendar">
            <Calendar showWeekNumbers onChange={onChange} value={date} />
            {console.log(date)}
            <h3>{date.toString()} </h3>
        </div>
        </Card>
        </>
    )
}
render(<SCalendar />, document.querySelector("#root"));

export default SCalendar;