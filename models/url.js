const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        long: {
            type: String,
            required: true
        },
        short: {
            type: String,
            required: true,
            unique: true
        },
        count: {
            type: Number,
            required: true,
            default: 0
        }
    },
    { timestamps: true }
);

urlSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'));
    } else {
        next();
    }
});

module.exports = mongoose.model("url", urlSchema)