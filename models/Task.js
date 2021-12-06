const mongoose = require("mongoose");

//Creating schema for Task
const Schema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

// create model for schema and export
const Task = mongoose.model("Task", Schema);
module.exports = Task;
