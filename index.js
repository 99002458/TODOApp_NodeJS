const express = require("express");
const app = express();
var port=8000;

var path = require("path");
const db = require("./configs/mongoose");

app.use(express.urlencoded());
app.use(express.static("./views"));

//view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// use express router
app.use("/", require("./routes"));

app.listen(port, () => {
    console.log("Server is up and running to port",port);
});