const express = require('express')

const router = express.Router()

const db = require('../models');

//Routes for /results/
router.get('/', async (req, res, next)=>{
    try{
        const searchTerms = req.query.search_query;
        const sortedVideos = require('../scripts/searchAlgorithm')(searchTerms);
        res.send(sortedVideos)
        // context = {sortedVideos: sortedVideos}
        // res.render('results.ejs', context)
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
module.exports = router;