const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    textContent: {
        type: String,
        required: true
    },
    channel: {
        type: mongoose.Types.ObjectId,
        ref: 'Channel',
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    replies: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }],
    pinned: {
        type: Boolean
    },
    loved: {
        type: Boolean
    }
}, 
    {timestamps: true}
)

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;