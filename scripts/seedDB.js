// ===================================================
// THIS is just example code and needs to be changed
// ===================================================


const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/task"
);

const taskSeed = [
  {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
  },
{
  userName: "playerthomasm6@gmail.com",
  projectName: "Good stuff fund",
  projectDescription: "Create a fund for under privliged kids",
  taskName: "Assign tasks",
  taskDescription: "Assign tasks to each team member",
  taskAssigne: "Matt",
  taskDueDate: "05/15/2021",
  taskComplete: false
},
{
  userName: "711mattman@gmail.com",
  projectName: "Clean shoes intiative",
  projectDescription: "Make sure all people have access to clean shoes",
  taskName: "Create list",
  taskDescription: "Assign tasks to each team member",
  taskAssigne: "Griffin",
  taskDueDate: "06/01/2021",
  taskComplete: false

},
{
  userName: "711mattman@gmail.com",
  projectName: "Build a bear",
  projectDescription: "Ship a large shipment of bears to the local orphanage",
  taskName: "Fluff and stuff",
  taskDescription: "Get in contact with a local manufacture to see how  many they can make",
  taskAssigne: "Thomas",
  taskDueDate: "03/06/2021",
  taskComplete: false

},
{
  userName: "playerthomasm6@gmail.com",
  projectName: "Radical Gamez",
  projectDescription: "An appliaction where a user can create a wishlist of games they want",
  taskName: "Assign tasks",
  taskDescription: "Assign tasks to each team member",
  taskAssigne: "John",
  taskDueDate: "04/16/2021",
  taskComplete: true
}

  
 
];

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
