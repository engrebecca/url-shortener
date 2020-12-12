const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models/url");
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to create new entry in database
app.post("/newUrl", async (req, res) => {
    await db.create({
        long: req.body.url,
        short: req.body.short,
        registerDate: new Date(),
        accessDate: new Date()
    });
});

// Route to get the long url associated with a shortcode
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

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/url_shortener",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);