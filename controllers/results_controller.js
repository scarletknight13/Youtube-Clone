const express = require('express')

const router = express.Router()

const db = require('../models');

router.get('/', async (req, res, next)=>{
    try{
        const search = req.query.search_query;
        let searchTags = search.split(' ');
        const tagSet = new Set(searchTags)
        const videos = await db.Video.find({})
        videos.sort((a, b) =>{
            let aTags = a.description.split(' ');
            let bTags = b.description.split(' ');
            let aMatches = 0;
            let bMatches = 0;
            for(let tag of aTags)
                if(tagSet.has(tag))
                    ++aMatches;
            
            for(let tag of bTags)
                if(tagSet.has(tag))
                    ++bMatches;
            return aMatches - bMatches;
        })
        const context = {videos}
        return res.render('results.ejs', context);
        // res.send('The show route is up');
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})