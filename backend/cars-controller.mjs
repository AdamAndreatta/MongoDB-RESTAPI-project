// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as cars from './cars-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/cars', (req,res) => { 
    cars.createCar(
        req.body.name, 
        req.body.year, 
        req.body.model,
        req.body.mileage,
        req.body.date
        )
        .then(car => {
            console.log(`"${car.name}" was added to the collection.`);
            res.status(201).json(car);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Item was unable to be added to the collection please double check required parameters.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/cars', (req, res) => {
    cars.retrieveCars()
        .then(cars => { 
            if (cars !== null) {
                console.log(`All cars were proccessed and retrieved from the collection`);
                res.json(cars);
            } else {
                res.status(404).json({ Error: 'Item was unable to be retrieved from the collection please check if key is valid.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Current request cannot be processed due to a possible client error.' });
        });
});


// RETRIEVE by ID controller
app.get('/cars/:_id', (req, res) => {
    cars.retrieveCarByID(req.params._id)
    .then(car => { 
        if (car !== null) {
            console.log(`"${car.name}" was retrieved, based on its ID.`);
            res.json(car);
        } else {
            res.status(404).json({ Error: 'Item was unable to be retrieved please double check the entered ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Current request was unable to be processed due to a possible client error.' });
    });

});


// UPDATE controller ************************************
app.put('/cars/:_id', (req, res) => {
    cars.updateCar(
        req.params._id, 
        req.body.name, 
        req.body.year, 
        req.body.model,
        req.body.mileage,
        req.body.date
    )
    .then(car => {
        console.log(`"${car.name}" was updated.`);
        res.json(car);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Current request was unable to be processed due to a possible client error.' });
    });
});


// DELETE Controller ******************************
app.delete('/cars/:_id', (req, res) => {
    cars.deleteCarById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} movie was deleted.`);
                res.status(200).send({ Success: 'Request was succesful and items of provided key has been deleted.' });
            } else {
                res.status(404).json({ Error: 'Requested item was unable to be found and deleted please check if entered key is valid.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Delete was unable to be carried out due to possible client or request failure.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});