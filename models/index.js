//models/index.js contains an export of each individual model file's export 
//This export is used by the controllers to manipulate database data depending on HTTP requests
module.exports = {
    Video: require('Video.js'),
    Channel: require('Channel.js'),
    Comment: require('Comment.js')
}
