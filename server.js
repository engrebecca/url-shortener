// Set up express app
const express = require("express");
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 5000);