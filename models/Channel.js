const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: "https://i.imgur.com/NsLWR0f.png"
    },
    subscribers: {
        type: Number,
        default: 0,
        min: 0
    }
})

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;