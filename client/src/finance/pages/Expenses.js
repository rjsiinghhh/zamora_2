import React from 'react';
import Chart from '../components/Chart'
import Card from '../../components/UIElements/Card'


import './Expenses.css';

const Expenses = props => {
    return(
        <>
<Card>
    <h1>Expenses</h1>
    <Chart />
</Card>
<Card>
    <p> Here is an expenses table breaking down all it takes to run an orchard.<br/> You have equipemnt, labor wages, electricity, diesel, water, maintanince, monthly repairs, chemicals, mortgages, insurance, and once a year harvest. <br />  </p>
</Card>
        </>
    )
}

export default Expenses;