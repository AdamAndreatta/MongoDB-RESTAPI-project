import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditCarPageTable = ({ carToEdit }) => {
 
    const [name, setName]       = useState(carToEdit.name);
    const [year, setYear]         = useState(carToEdit.year);
    const [model, setModel] = useState(carToEdit.model);
    const [mileage, setMileage] = useState(carToEdit.mileage);
    const [date, setDate] = useState(carToEdit.date);
    
    const redirect = useNavigate();

    const editCar = async () => {
        const response = await fetch(`/cars/${carToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                year: year, 
                model: model,
                mileage: mileage,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Change and upload of information was a success`);
        } else {
            const errMessage = await response.json();
            alert(`Upload of changed information has failed please check if info was correct ${response.status}. ${errMessage.Error}`);
        }
        redirect("/pages/CarsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a car</h2>
            <p>Please select and change the information you wish to edit.</p>
            <table id="cars">
                <caption>Please enter edited information.</caption>
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
                            placeholder="Name of the car"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="year">Year released</label>
                        <input
                            type="number"
                            value={year}
                            placeholder="Year of the car"
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
                    <td><label for="mileage">Mileage of Vehicle</label>
                        <input
                            type="number"
                            value={mileage}
                            placeholder="Mileage of the car"
                            onChange={e => setMileage(e.target.value)} 
                            id="mileage" />
                    </td>
                    <td><label for="date">Date of submission</label>
                        <input
                            type="date"
                            value={date}
                            placeholder="Date"
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>
                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editCar}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditCarPageTable;