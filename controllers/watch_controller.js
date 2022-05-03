const express = require('express')

const router = express.Router()

const db = require('../models');

router.get('/:id', async (req, res, next)=>{
    try{       
     //grab all videos first, which is an array
     //array.find that array by the video with ID req.params.id
        const currentVideo = await db.Video.findById(req.params.id).populate('comments').populate('channel');
        const comments = currentVideo.comments
        comments.forEach(element => {
            element.populate('replies')
        });
        let allvideos = await db.Video.find({})
        allvideos = require('../routeScripts/formatVideoData')([...allvideos]);
        const context = {
            currentVideo: currentVideo,
            comments: currentVideo.comments,
            videoId: currentVideo._id,
            allVideos: allvideos
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
            let newComments = parent.replies;
            newComments.push(newComment._id)
            db.Comment.findByIdAndUpdate(parentId, {
                replies: newComments,
            }, 
            (error, updatedComment)=>{
                if(error){
                    console.log(error);
                }
            })
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
            })
        }
        res.redirect(`/watch/${req.body.videoId}`)
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
        const videoId = req.body.videoId;
        delete req.body.isReply;
        res.redirect(`/watch/${req.body.videoId}`);

    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
router.put('/:id', async(req, res, next) =>{
    try{
        const id = req.params.id;
        const comment = db.Comment.findByIdAndUpdate(id, {
            textContent: req.body.textContent
        },
        (error, updatedComment) => {
            if(error){
                console.log(error)
            }
        })
    }
    catch(error){
        console.log(error);
        req.error = error;
        next();
    }
    res.redirect(`/watch/${req.body.videoId}`);
})
module.exports = router;
