const express = require('express')

const router = express.Router()

const db = require('../models');

// index route should display list of videos like youtube home page
router.get('/', async (req, res, next)=>{
    try{
        const videos = await db.Video.find({});
        const context = {videos};
        console.log(videos);
        // res.send('I made it');
        return res.render('home.ejs', context);
    }
    catch(error){
        console.log(error);
        res.error = error;
        return next();
    }
})

module.exports = router