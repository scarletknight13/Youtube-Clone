const mongoose = require('mongoose');

require('dotenv').config();

const connectionStr = process.env.MONGODB_URI;

mongoose.connect(connectionStr);
const db = require('../models');
// db.Video.create({
//     title: {
//     },
//     videoData: {
//     },
//     channel: {
//     },
//     description: {
//     },
//     views: {
//     },
//     likes: {
//     },
//     comments: [{
//     }])
db.Channel.create({
    name: "World Dominating AIs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABTJ8MQW3_0us05riwtEV_SCUCGqdyD9Izg&usqp=CAU",
    subscribers: 856732
})
// new comment

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected.`)
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ', error)
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected.')
})