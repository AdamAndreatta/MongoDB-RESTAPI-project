import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import CarsList from '../components/CarsList';
import { Link } from 'react-router-dom';


function CarsPage({ setCar }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [cars, setCars] = useState([]);

    // RETRIEVE the entire list of cars
    const loadCars = async () => {
        const response = await fetch('/cars');
        const cars = await response.json();
        setCars(cars);
    } 
    

    // UPDATE a single car
    const onEditCar = async car => {
        setCar(car);
        redirect("/update");
    }


    // DELETE a single car
    const onDeleteCar = async _id => {
        const response = await fetch(`/cars/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/cars');
            const cars = await getResponse.json();
            setCars(cars);
        } else {
            console.error(`Selected car has been succesfully deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the cars
    useEffect(() => {
        loadCars();
    }, []);

    // DISPLAY the cars
    return (
        <>
            <h2>List of Cars</h2>
            <p>This page will present the added cars and will provide the option to add, edit, or remove cars from the database.</p>
            <Link to="/create"><MdOutlineCreateNewFolder size={35} onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="purple"}/></Link>
            <CarsList 
                cars={cars} 
                onEdit={onEditCar} 
                onDelete={onDeleteCar} 
            />
        </>
    );
}

export default CarsPage;