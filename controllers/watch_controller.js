const express = require('express')

const router = express.Router()

const db = require('../models');
 
router.get('/:id', async (req, res, next)=>{
    try{
        const currenttVideo = await db.Video.findById(req.params.id).populate('comments');
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

router.post('/', async (req, res, next)=>{
    try{
        const isReply = req.body.isReply;
        if(isReply){
            const parentComment = await db.Comment.findById(req.body.parentId);
            const newComment = await
        }
        else{

        }
    }
})
router.delete('/:id', async (req, res, next)=>{
    try{
        const currentComment = db.Comment.findByIdAndDelete(req.params.id);
        res.render(`/watch/${req.params.id}`);
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
module.exports = router;
