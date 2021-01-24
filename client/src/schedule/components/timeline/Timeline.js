import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";
import Icon from './Icon';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Button from '../../../components/FormElements/Button'



import './Timeline.css'

const ListTodo = () => {
    let workIconStyles = { background: "#d2f6c5" };
    let schoolIconStyles = { background: "#f9c74f" };

    const [todos, setTodos] = useState([]);
    const getAllTodos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/schedule");
            const data = response.data;
            setTodos(data);
        } catch (err) {
            console.error(err.message);
        }
    }
    const deleteTodo = async (deleteId) => {
        try {
            await axios.delete(`http://localhost:5000/schedule/${deleteId}`);
            setTodos(todos.filter(todo => todo.todo_id !== deleteId));
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getAllTodos();
    }, []);
    
    return(
        <VerticalTimeline>
                {todos.map(todo => (
                    <VerticalTimelineElement>
                    <li key={todo.todo_id}>
                        {todo.description} <br />
                        {todo.date}
                        <br />
                        <Button onClick={() => deleteTodo(todo.todo_id)}>
                            Finished
                        </Button>

                        
                    </li>
                     </VerticalTimelineElement>
                ))}
           
        </VerticalTimeline>
    );
};
export default ListTodo;
