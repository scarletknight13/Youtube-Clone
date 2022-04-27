const express = require('express')

const router = express.Router()

const db = require('../models');

// index route should display list of videos like youtube home page
router.get('/', async (req, res, next)=>{
    try{
        const videos = await db.Video.find({});
        const context = {videos};
        console.log(videos);
        res.send('I made it');
        return res.render('index.js', context);
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
        const currenttVideo = await db.Video.findById(req.params.id);
        const comments = currenttVideo.comments
        console.log(currenttVideo);
        const context = {
            videoLink: currentVideo.videoData,
            comments: currenttVideo.comments
        }
        return res.render('show.ejs', context);
        // res.send('The show route is up');
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
// new route allows user to add video
router.get('/new', (req, res)=>{
    res.render('new.js')
})

router.post('/video', async (req, res, next) =>{
    try{
        const createdVideo = await db.Video.create(req.body);
        console.log(`Created video is ${createdVideo}`);
        res.redirect('/videos')
    }   
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
router.delete('/:id', async (req, res, next)=>{
    try{
        const currenttVideo = db.Video.findById(req.params.id);
        const deletedVideo = await db.Video.findByIdAndDelete(req.params.id)
        const commentsToDelete = currenttVideo.comments;
        for(let i of )
    }
})
module.exports = router;