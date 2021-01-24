import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'; 
import Card from '../../../components/UIElements/Card';
import Button from '../../../components/FormElements/Button'


import './Add.css'
// import '../../../components/UIElements/Card.css'



const AddSchedule = () => {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [icon, setIcon] = useState("")


    const createNewTodo = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/schedule", 
            {
                date: date,
                description: description,
                icon: icon
            })
        } catch (err) {
            console.error(err.message);
        }
        window.location = '/'
    }



    return(
        <Card>
        <Fragment>
        <Form>
                
            <h2>Daily Schedule</h2>

            <input type= "text" 
            value={description} 
            onChange= {e => setDescription(e.target.value)}
            />

            <input type ="date"
            value={date}
            onChange= {e => setDate(e.target.value)}
            />

            
             <Button onClick ={createNewTodo}> Add</Button>


        </Form>
    </Fragment>
    </Card>
    )
};

export default AddSchedule; 