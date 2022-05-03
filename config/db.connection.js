//Load dependencies
const mongoose = require('mongoose');
require('dotenv').config();

//Connect to the database
const connectionStr = process.env.MONGODB_URI;
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );



//Database Event Handling
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected.`)
})
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ', error)
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected.')
})