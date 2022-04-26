const express = require('express')

const router = express.Router()

const db = require('../models');

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
router.get('/:id', async (req, res, next)=>{
    try{
        const currenttVideo = await db.Video.findById(req.params.id);
        const commentsForVideo = await db.Comment.find();
    }
})
module.exports = router;