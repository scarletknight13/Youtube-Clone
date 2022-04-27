const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: ""
    },
    subscribers: {
        type: Number,
        default: 0,
        min: 0
    }
})

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;