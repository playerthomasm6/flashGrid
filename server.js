const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const cors = require("cors")
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/task");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
  cors({
    origin: "http://localhost:3000/Login",
    credentials: true,
  })
);
app.use( 
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./models/passportConfig")(passport);

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      })
    }
  })
});
app.post("/register", (req, res) => {
  User.findOne({ username:req.body.username}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already exsists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user);
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});