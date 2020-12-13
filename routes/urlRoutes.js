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
    const longUrl = await db.findOneAndUpdate({ short: req.params.shortcode }, { $inc: { count: 1 } });
    if (longUrl == null) {
        return res.sendStatus(404);
    }
    res.json(longUrl);
})

// Route for getting all shortcodes in db to validate if a user's submitted shortcode already exists
app.get("/", async (req, res) => {
    const data = await db.find({}, "short").exec();
    let hbsObject = { urlData: data }
    res.render("index", hbsObject)
    // res.json(data);
})

// Route for getting stats for a shortcode
app.get("/:shortcode/stats", async (req, res) => {
    const stats = await db.findOne({ short: req.params.shortcode }, "createdAt updatedAt count").exec();
    res.json(stats);
})

module.exports = app;