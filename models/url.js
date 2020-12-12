const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        long: {
            type: String,
            required: true
        },
        short: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema)