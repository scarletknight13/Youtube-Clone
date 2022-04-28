const express = require('express')

const router = express.Router()

const db = require('../models');

//Routes for /results/
router.get('/', async (req, res, next)=>{
    try{
        const videos = await db.Video.find({}); // array of all videos in Video Collection in mongodB
        let searchTerms = req.query.search_query //this is the search term entered in the form
        let sortedVideos = require('../scripts/searchAlgorithm')(searchTerms, videos); //needs to be a sorted array of Video objects
        console.log(sortedVideos)
        context = {videos: sortedVideos}
        res.render('results.ejs', context);
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
module.exports = router;