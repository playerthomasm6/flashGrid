const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;