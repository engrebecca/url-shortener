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
    })
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