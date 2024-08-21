import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


function Car({ car, onEdit, onDelete }) {
    return (
        <tr>
            <td>{car.name}</td>
            <td>{car.year}</td>
            <td>{car.model}</td>
            <td>{car.mileage}</td>
            <td>{car.date.slice(0,10)}</td>
            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin5Line onClick={() => onDelete(car._id)} size={30} color='black' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="black"}/></td>
            <td><TiEdit  onClick={() => onEdit(car)} size = {30} color='black' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="black"}/></td>
        </tr>
    );
}

export default Car;