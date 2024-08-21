// Models for the Movie Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Server has encountered and unexpected error request could not be filled.' });
    } else  {
        console.log('Success: Server connection was succesful.');
    }
});

// SCHEMA: Define the collection's schema.
const carSchema = mongoose.Schema({
	name:    { type: String, required: true },
	year:     { type: Number, required: true },
	model: { type: String, required: true },
    mileage: {type: Number, required: true},
    date: {type: Date, default: Date.now, required: true}
});

// Compile the model from the schema 
// by defining the collection name "movies".
const cars = mongoose.model('Cars', carSchema);


// CREATE model *****************************************
const createCar = async (name, year, model, mileage, date) => {
    const car = new cars({ 
        name: name, 
        year: year, 
        model: model,
        mileage: mileage,
        date: date
    });
    return car.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveCars = async () => {
    const query = cars.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCarByID = async (_id) => {
    const query = cars.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteCarById = async (_id) => {
    const result = await cars.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateCar = async (_id, name, year, model, mileage, date) => {
    const result = await cars.replaceOne({_id: _id }, {
        name: name,
        year: year,
        model: model,
        mileage: mileage,
        date: date
    });
    return { 
        _id: _id, 
        name: name,
        year: year,
        model: model,
        mileage: mileage,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createCar, retrieveCars, retrieveCarByID, updateCar, deleteCarById }