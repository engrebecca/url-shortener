const express = require("express");
const app = express();
const db = require("../models/url");

// Route to create new entry in database
app.post("/newUrl", async (req, res) => {
    // Create new document in collection if shortcode is available
    try {
        const newUrl = await db.create({
            long: req.body.url,
            short: req.body.short,
            registerDate: new Date(),
            accessDate: new Date()
        });
        res.json(newUrl);
    }
    // Return error response code if shortcode already exists
    catch (err) {
        return res.sendStatus(400);
    }
});

// Route to get the long url associated with a shortcode and update count and updatedAt fields
app.get("/:shortcode", async (req, res) => {
    try {
        const longUrl = await db.findOneAndUpdate({ short: req.params.shortcode }, { $inc: { count: 1 } });
        res.redirect(longUrl.long)
    }
    catch (err) {
        return res.sendStatus(404);
    }
})

// Route for getting all shortcodes in db to validate if a user's submitted shortcode already exists
app.get("/", async (req, res) => {
    const data = await db.find({}, "short").exec();
    res.render("index");
})

// Route for getting stats for a shortcode
app.get("/:shortcode/stats", async (req, res) => {
    try {
        const stats = await db.findOne({ short: req.params.shortcode }, "createdAt updatedAt count short long").lean().exec();
        let statsObj = {
            urlStats: stats
        }
        console.log(statsObj)
        res.render("stats", statsObj);
    }
    catch (err) {
        return res.sendStatus(404);
    }
})

module.exports = app;