const express = require("express");
const fs = require("fs");
const path = require("path");

// initialize appp
const PORT = process.env.PORT || 3002;
const app = express();
// app.set( PORT, (process.env.PORT || 3002 ));

// parse incoming array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
app.use(express.static(__dirname));

// route file
require("./routes/appRoutes")(app);

// listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
debugger;