const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

require("./config");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Listening on port ${PORT}`);
});