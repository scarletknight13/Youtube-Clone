const express = require('express')

const router = express.Router()

const db = require('../models');
 
router.get('/:id', async (req, res, next)=>{
    try{
        const currentVideo = await db.Video.findById(req.params.id).populate('comments');
        const comments = currentVideo.comments;

        const context = {
            videoLink: currentVideo.videoData,
            comments: currentVideo.comments,
            videoId: currentVideo._id
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

router.post('/:id', async (req, res, next)=>{
    try{
        const isReply = req.body.isReply == 'true';
        delete req.body.isReply;
        const parentId = req.params.id;
        let parent;
        req.body.channel = await db.Channel.findById("626957058e1967faf6148714");
        if(isReply){
            parent = await db.Comment.findById(parentId);
        }
        else{
            parent = await db.Video.findById(parentId);
        }
        const newComment = await db.Comment.create(req.body)
        if(isReply){
            parent.replies.push(newComment._id);
        }
        else{
            let newComments = parent.comments;
            newComments.push(newComment._id)
            db.Video.findByIdAndUpdate(parentId, {
                comments: newComments,
            }, 
            (error, updatedVid)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(updatedVid)
                }
            }
            )
        }
        res.send(parent)
    }
    catch(error){
        console.log(error);
        req.error = error;
        next();
    }
})
router.delete('/:id', async (req, res, next)=>{
    try{
        const id = req.params.id;
        const currentComment = await db.Comment.findByIdAndDelete(id);
        const parentId = req.body.parentId;
        const videoId = req.body.videoId;
        delete req.body.isReply;
        console.log()
        if(parentId == videoId){
            console.log()
            let found = await db.Video.findById(parentId).comments.find(element => element === videoId)
        }
        else{
            let found = await db.Comment.findById(parentId).replies.find(ele)
            found
        }
        res.redirect(`/watch/${req.params.id}`);

    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
module.exports = router;
