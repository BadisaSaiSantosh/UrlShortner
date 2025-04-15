const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        unique: true
    },
    originalURL: {
        type: String,
        required: true
    },
    clicked: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("URL", URLSchema);
