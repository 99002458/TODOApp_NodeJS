// import instance of express 
const express = require("express");
const router = express.Router();

const app = express();



var path = require("path");
// const db = require("./configs/mongoose");

app.use(express.urlencoded());

app.use(express.static("./views"));

//view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// importing taskController
const taskController = require("../controllers/taskController");

// call function of task controller depending on requested url
router.post("/addTask", taskController.addTask);
router.post("/deleteTask", taskController.deleteTask);
// router.get("/editTask",taskController.editTask);
router.post("/editTask",taskController.editTask);
router.post("/confirmEditedTask",taskController.confirmEditedTask);


// export router module
module.exports = router;
