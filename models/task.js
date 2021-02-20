const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userName: String,
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  taskName: String,
  taskDescription: String,
  taskAssigne: String,
  taskDueDate: { type: Date, default: Date.now },
  taskComplete: false
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
