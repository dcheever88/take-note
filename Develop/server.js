const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require("./routes/appRoutes")(app);

app.listen(PORT, function() {
    console.log(`API server now on port ${PORT}!`);
});