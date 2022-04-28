const mongoose = require('mongoose');
//Maybe add thumbnail?
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    videoData: {
        //placeholder embed URL, eventually switch to file in database
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    channel: {
        type: mongoose.Types.ObjectId,
        ref: 'Channel',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0,
        min: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
}, 
    {timestamps: true}
)

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;