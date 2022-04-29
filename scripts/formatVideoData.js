function formatVideoData(rawVideoData){
    //return the same video data but with 1.4K views instead of 1452
    //return the same video data but with 3 hours ago / 2 days / 1 week / 4 months / 1 year
    //instead of the Date string
    return rawVideoData;
}

module.exports = formatVideoData;