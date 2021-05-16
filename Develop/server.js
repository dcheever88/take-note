const express = require("express");
const fs = require("fs");
const path = require("path");

// initialize appp
const app = express();
const PORT = process.env.PORT || 3002;

// parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// route file
require("./routes/appRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log(`API server now on port ${PORT}!`);
});