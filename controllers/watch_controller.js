const express = require('express')

const router = express.Router()

const db = require('../models');
 
router.get('/:id', async (req, res, next)=>{
    try{
        const currenttVideo = await db.Video.findById(req.params.id);
        const comments = currenttVideo.comments;
        
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