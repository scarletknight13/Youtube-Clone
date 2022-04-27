//models/index.js contains an export of each individual model file's export 
//This export is used by the controllers to manipulate database data depending on HTTP requests
module.exports = {
    //The collection of videos is used to sort during search
    //Each video has 1 array of comments associated with it
    Video: require('./Video'),
    Channel: require('./Channel'),
    Comment: require('./Comment')
}
