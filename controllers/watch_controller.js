const express = require('express')

const router = express.Router()

const db = require('../models');


 
router.get('/:id', async (req, res, next)=>{
    try{
        const currentVideo = await db.Video.findById(req.params.id).populate('comments');
        const allVideo = await db.Video.find({});
        const comments = currentVideo.comments;
       

        console.log(currentVideo);
        const context = {
            videoLink: currentVideo,
            videos: allVideo,
            allComments: comments,
           
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
        const isReply = req.body.isReply == 'true';
        delete req.body.isReply;
        let parent;
        if(isReply){
            parent = await db.Comment.findById(req.body.parentId);
        }
        else{
            parent = await db.Comment.findById(req.body.parentId);
        }
        delete req.body.parentId;
        const newComment = await db.create(req.body)
    }
    catch(error){
        console.log(error);
        req.error = error;
        next();
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
