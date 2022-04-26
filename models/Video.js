const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    videoData: {
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
    comments: {
        type: mongoose.Types.ObjectId,
        ref: Comment
    }
}, 
    {timestamps: true}
)

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;