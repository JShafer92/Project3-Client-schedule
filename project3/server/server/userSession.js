const mongoose = require('mongoose');
const UserSessionSchema = new mongoose.Schema({
    userID: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.new()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});