const express = require('express')

const router = express.Router()

const db = require('../models');

router.get('/', async (req, res, next)=>{
    try{
        const videos = await db.Video.find({});
        let search = req.query.search_query
        let searchResult = require('../scripts/search_algorithm')(search, videos);
        res.send(videos);
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
module.exports = router;