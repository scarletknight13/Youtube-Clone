const express = require('express')

const router = express.Router()

const db = require('../models');

// index route should display list of videos like youtube home page
router.get('/', async (req, res, next)=>{
    try{
        // const videos = await db.Video.find({});
        // const context = {videos};
        // console.log(videos);
        res.send('I made it');
        // return res.render('index.js', context);
    }
    catch(error){
        console.log(error);
        res.error = error;
        return next();
    }
})
// show route should display selected video with comments under
router.get('/:id', async (req, res, next)=>{
    try{
        // const currenttVideo = await db.Video.findById(req.params.id);
        const comments = await db.find.Comment.find({})
        // console.log(currenttVideo);
        // const context = {
        //     videoLink: currentVideo.videoData,
        //     comments: currenttVideo.comments
        // }
        // return res.render('show.ejs', context);
        res.send('The show route is up');
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
// edit route
router
module.exports = router;