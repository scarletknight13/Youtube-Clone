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
    title: "BEST CAT MEMES COMPILATION OF 2022 PART 2",
    videoData: "https://www.youtube.com/embed/r-sBTcxyLLw",
    channel: "62695a3bc12ea2d97091911b",
    description: "Dank cat memes compilation from 2021 Features cute and funny Tiktok cats and cat memes to make you laugh. For the best cat and animal cute pet videos, subscribe to my  channel!",
    views: 972027,
    likes: 6923,
    comments: []
})