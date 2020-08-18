const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

module.exports = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});