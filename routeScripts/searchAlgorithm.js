function sortByRelevance (search, videos){
    let searchTags = search.toLowerCase().split(' ');    
    // searchTags.forEach(element => {
    //     if (!/[a-z]/.test(element[element.length-1])) {
    //         searchTags.push(element.slice(0,element.length-1))
    //     }
    // })
    searchTags.forEach(element => {
        while (!/[a-z]/.test(element[element.length-1])) {
            element = element.slice(0,element.length-1)
        }
        searchTags.push(element);
        if (element[element.length-1] === 's') {
            searchTags.push(element.slice(0,element.length-1))
        } else {
            searchTags.push(element+'s');
        }
            
    })
    console.log(searchTags);
    let titleFactor=10;
    const tagSet = new Set(searchTags)
    const sortedVideos = videos.sort((a, b) => {
        let aDescriptionTags = new Set(a.description.toLowerCase().split(' '));
        let aTitleTags = new Set(a.title.toLowerCase().split(' '))
        let bDescriptionTags = new Set(b.description.toLowerCase().split(' '));
        let bTitleTags = new Set(b.title.toLowerCase().split(' '));
        let aMatches = 0;
        let bMatches = 0;
        for(let tag of aDescriptionTags)
            if(tagSet.has(tag))
                ++aMatches;
        for(let tag of aTitleTags)
            if(tagSet.has(tag))
                aMatches+=titleFactor;
        
        
        for(let tag of bDescriptionTags)   
            if(tagSet.has(tag))
                ++bMatches;
        for(let tag of bTitleTags)
            if(tagSet.has(tag))
                bMatches+=titleFactor;
        return bMatches - aMatches;
    })
    return sortedVideos;
}
module.exports = sortByRelevance;