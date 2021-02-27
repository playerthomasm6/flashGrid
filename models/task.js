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

const userSchema = new Schema({
  username: String,
  password:String,
})

const Task = mongoose.model("task", taskSchema);
const User = mongoose.model("user", userSchema);

module.exports = Task;

module.exports= User;
