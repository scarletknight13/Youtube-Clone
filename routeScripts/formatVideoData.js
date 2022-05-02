function formatVideoData(rawVideoData){
    //return the same video data but with 1.4K views instead of 1452
    //return the same video data but with 3 hours ago / 2 days / 1 week / 4 months / 1 year
    //instead of the Date string
    // rawVideoData.views = formatViews(rawVideoData.views);
    const newData = [];
    rawVideoData.forEach(video => {
        newData.push({
            ...video
        })
    })
    newData.forEach(video => {
        video._doc.views = formatViews(video._doc.views);
        video._doc.createdAt = formatDate(video._doc.createdAt);
    });
    return rawVideoData;

}
function formatViews(views){
    let viewsStr = views.toString();
    let overflow = viewsStr.length % 3;
    const places = {
        '3': 'K',
        '6': 'M',
        '9' : 'B'
    }
    if(overflow == 0){
        let num = viewsStr.slice(0, 3);
        let place =(viewsStr.length - 3).toString();

        return num + ` ${places[place] }`;
    }
    let num = viewsStr.slice(0, overflow);
    let place = (viewsStr.length - overflow).toString();
    return num + ` ${places[place] }`;
}
function formatDate(uploadDate){
    let ans = ""
    let currentDate = new Date();
    let difference = currentDate.getTime()-uploadDate.getTime();
    let hours = difference / 1000 / 3600;
    let minutes = hours * 60;
    if(hours >= 8760){
        ans = `${parseInt(hours / 8760)} years`;
    }
    else if(hours >= 730){
        ans = `${parseInt(hours / 730)} months`
    }
    else if(hours >= 168){
        ans = `${parseInt(hours / 168)} weeks`
    }
    else if(hours >= 24){
        ans = `${parseInt(hours / 24)} days`
    }
    else if(hours > 1){
        ans = `${parseInt(hours)} hours`
    }
    else{
        ans = `${parseInt(minutes)} minutes`
    }
    return ans + ' ago';

}

module.exports = formatVideoData;