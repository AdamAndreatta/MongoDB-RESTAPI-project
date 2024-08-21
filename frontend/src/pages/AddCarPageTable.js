import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css'
// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddCarPageTable = () => {

    const [name, setName]   = useState('');
    const [year, setYear]   = useState('');
    const [model, setModel] = useState('');
    const [mileage, setMileage] = useState('');
    const [date, setDate] = useState();
    
    const redirect = useNavigate();

    const addCar = async () => {
        const newCar = {name, year, model, mileage, date};
        const response = await fetch('/cars', {
            method: 'post',
            body: JSON.stringify(newCar),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Upload was success`);
        } else {
            alert(`Upload failed please check if information was entered correctly = ${response.status}`);
        }
        redirect("/pages/CarsPage");
    };


    return (
        <>
        <article>
            <h2>Add a car</h2>
            <p>Please enter the provided information spaces to add the vehicle of your choice please make sure to fill in each category.</p>
            
            <table id="cars">
                <caption>Which car are you adding?</caption>
                <thead> 
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Mileage</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">Car name</label>
                        <input
                            type="text"
                            placeholder="Name of car"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="year">Year released</label>
                        <input
                            type="number"
                            value={year}
                            placeholder="Year of release"
                            onChange={e => setYear(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label for="model">Model</label>
                        <input
                            type="text"
                            placeholder="Model of vehicle"
                            value={model}
                            onChange={e => setModel(e.target.value)} 
                            id="model" />
                    </td>
                    <td><label for="mileage">Mileage</label>
                        <input
                            type="number"
                            placeholder="Current Mileage"
                            value={mileage}
                            onChange={e => setMileage(e.target.value)} 
                            id="mileage" />
                    </td>
                    
                    <td><label for="date">Date</label>
                        <input
                            type="date"
                            placeholder="Mileage of vehicle"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>
                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addCar}
                            id="submit"
                        >Add</button>
                    </td>
                    
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddCarPageTable;