import React from 'react';
import Car from './Car';
import '../App.css'
// Change the function names and parameters 
// to fit your portfolio topic and schema.

function CarList({ cars, onDelete, onEdit }) {
    return (
        <table id="cars">
            <caption>Add and Edit Cars</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Mileage</th>
                    <th>date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car, i) => 
                    <Car
                        car={car} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default CarList;
