const express = require("express");
const bodyParser = require("body-parser");

const timeTrackerRoutes = require("./route/time-tracker");

const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS config
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

// Routes
app.use("/api/timeTracker", timeTrackerRoutes);

app.listen(3000, () => {
    console.log("Server init in 3000");
});