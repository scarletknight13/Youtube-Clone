 function sortByRevealance (search, videos){
    let searchTags = search.toLowerCase().split(' ');
    const tagSet = new Set(searchTags)
    console.log(searchTags);
    videos.sort((a, b) =>{
        let aTags = new Set(a.description.toLowerCase().split(' '));
        let bTags = new Set(b.description.toLowerCase().split(' '));
        let aMatches = 0;
        let bMatches = 0;
        for(let tag of aTags)
            if(tagSet.has(tag))
                ++aMatches;
        
        for(let tag of bTags)
            if(tagSet.has(tag))
                ++bMatches;
        return bMatches - aMatches;
    })
}
module.exports = sortByRevealance;
