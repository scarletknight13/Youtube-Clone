
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
    title: "Cycle Detection In Graph Using DFS",
    videoData: "https://www.youtube.com/embed/eCG3T1m7rFY",
    channel: "6269582f8c6c55c62158193f",
    description: `Listen to GO:OD AM here: https://smarturl.it/GoodAm

    Follow Mac Miller:
    https://macmillerswebsite.com/
    Facebook: https://facebook.com/MacMiller
    Instagram: https://instagram.com/macmiller/
    Twitter: https://twitter.com/MacMiller
    Soundcloud: https://soundcloud.com/larryfisherman`,
    thumbnail: 'https://i.ytimg.com/vi/eCG3T1m7rFY/hqdefault.jpg',
    views: 54950534,
    likes: 420747,
    comments: []
})
