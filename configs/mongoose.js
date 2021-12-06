const mongoose = require("mongoose");

// connection to mongodb
mongoose.connect("mongodb://localhost/TodoApp");

const database = mongoose.connection;

// db connection success handlining function

database.once("open", function() {
  console.log("MongoDB Connection Succeded");
});

// database connection error handlining function
database.on("error", console.error.bind(console, "MongoDB Connection Error"));

// exporting module
module.exports = database;
