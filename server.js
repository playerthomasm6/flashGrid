const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
// const routes = require("./routes");
=======
const routes = require("./routes");
>>>>>>> 86c3a71e267dc52352583994e4eb632bb9003f91
const app = express();
const PORT = process.env.PORT || 4001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
<<<<<<< HEAD
// app.use(routes);
=======
app.use(routes);
>>>>>>> 86c3a71e267dc52352583994e4eb632bb9003f91

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/task");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});