import React, { useState }  from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import Card from '../../../components/UIElements/Card';
import './Calendar.css'
import Button from '../../../components/FormElements/Button'
import Modal from '../../../components/UIElements/Modal';
import '../../places/components/PlaceList.css';



const SCalendar = () => {
    const [date, setDate] = useState(new Date());

    const [showCalendar, setShowCalendar] = useState(false);
     const openCalendarHandler = () => setShowCalendar(true);
    const closeCalendarHandler = () => setShowCalendar(false);
    const onChange = date => {
        setDate(date)
    }

    return(
                <React.Fragment>
                  <Modal
                    show={showCalendar}
                    onCancel={closeCalendarHandler}
                    contentClass="place-item__modal-content"
                    footerClass="place-item__modal-actions"
                    footer={<Button onClick={closeCalendarHandler}>CLOSE</Button>}
                  >
                    <div className="calendar-container">
                      <Calendar onChange={onChange} value={date} />
                    </div>
                  </Modal>
                  <li className="place-item">
                    <Card className="place-item__content">
                      <div className="place-item__info">
            {console.log(date)}
            <h3>{date.toString()} </h3>
                       
                      </div>
                      <div className="place-item__actions">
                        <Button inverse onClick={openCalendarHandler}>View Calendar</Button>
                      </div>
                    </Card>
                  </li>
                </React.Fragment>
                
              );
            };
            
            render(<SCalendar />, document.querySelector("#root"));


            export default SCalendar;








