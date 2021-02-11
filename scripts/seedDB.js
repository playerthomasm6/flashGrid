// ===================================================
// THIS is just example code and needs to be changed
// ===================================================


const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const taskSeed = [
  {
    title: "test",
    author: 'test',
    synopsis:'test',
    date: new Date(Date.now())
  },
  {
    title: "test1",
    author: "test1",
    synopsis: 'test1',
    date: new Date(Date.now())
  },
  
 
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
