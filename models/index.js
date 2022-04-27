//models/index.js contains an export of each individual model file's export 
//This export is used by the controllers to manipulate database data depending on HTTP requests
module.exports = {
    //Some schemas are dependent on others to exist to be created
    //Channel must exist before a video can be created (because a video requires a channel)
    Channel: require('./Channel'),
    //A Video must exist before a comment can exist 
    Video: require('./Video'),
    Comment: require('./Comment')
}
