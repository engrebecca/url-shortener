const express = require("express");
const app = express();
const db = require("../models/url");

// Route to create new entry in database
app.post("/newUrl", async (req, res) => {
    await db.create({
        long: req.body.url,
        short: req.body.short,
        registerDate: new Date(),
        accessDate: new Date()
    });
});

// Route to get the long url associated with a shortcode and update count and updatedAt fields
app.get("/:shortcode", async (req, res) => {
    const longUrl = await db.findOneAndUpdate({ short: req.params.shortcode }, { $inc: { count: 1 } });
    if (longUrl == null) {
        return res.sendStatus(404);
    }
    res.json(longUrl);
})

// Route for getting all shortcodes in db to validate if a user's submitted shortcode already exists
app.get("/", async (req, res) => {
    const data = await db.find({}, "short").exec();
    res.json(data);
})

// Route for getting stats for a shortcode
app.get("/:shortcode/stats", async (req, res) => {
    const stats = await db.findOne({ short: req.params.shortcode }, "createdAt updatedAt count").exec();
    res.json(stats);
})

module.exports = app;