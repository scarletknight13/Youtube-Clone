
const mongoose = require('mongoose');
require('dotenv').config();

const connectionStr = process.env.MONGODB_URI;
mongoose.connect(connectionStr);


mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected.`)
})
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ', error)
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected.')
})

const db = require('./index.js')
db.Video.create({
    title: "Molecular Gastronomy - Frozen Parmesan Foam Recipe",
    videoData: "https://www.youtube.com/embed/KlFmrTKg5JU",
    channel: "6269582f8c6c55c62158193f",
    description: `Create Amazing Frozen Parmesan Foams with our Cuisine R-Evolution Kit and Receive 5$ to discover it here by subscribing to our newsletter: 
    https://molecule-r.com/pages/about-mo...
    
    Click here to receive our 40 Free Recipe E-book: https://www.molecule-r.com/free-e-book
    
    More Molecule-R products here : https://molecule-r.com/collections/al...`,
    views: 172756,
    likes: 1367,
    comments: []
})