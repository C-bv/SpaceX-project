import express from 'express';
import usersModel from './models/users.js';
import mongoose from 'mongoose';
import 'dotenv/config'


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/Booking/rockets', (req, res) => {
    usersModel.create({
        firstName: 'toto',
        lastName: 'Tesssssst',
    }).then(function (user) {
        res.send(user);
    });
});

app.get('/about', (req, res) => {
    usersModel.find((err, userData) => {
        if (!err) {
            res.status(200).json({
                message: 'Success',
                data: userData
            })
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
});

async function onListening() {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: process.env.MONGODB_DB
        });
        console.log('Connected to MongoDB');
    } catch {
        console.log('Error connecting to MongoDB');
    }
};

app.listen(PORT, () => {
    onListening()
    console.log(`Server listening on port ${PORT}`);
});