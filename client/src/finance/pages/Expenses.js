import React from 'react';
import Chart from '../components/Chart'
import Chart2 from '../components/Chart2'
import Chart3 from '../components/Chart3'

import './Expenses.css';

const Expenses = props => {
    return(
        <>
        <h1>Expenses</h1>
        <Chart3 />
        <Chart />
        <Chart2 />
        </>
    )
}

export default Expenses;