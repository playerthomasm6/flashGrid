import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.js";
import MyProjects from "./pages/myProjects.js";
import About from "./pages/about";
import Login from "./pages/login"
import Register from "./pages/register"
import UserProvider from './providers/UserProvider'


function App() {
  return (
    <UserProvider>
    <Router>
      <div>
        <Switch>
          
          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route exact path={"/projects"}>
            <MyProjects />
          </Route>

          <Route exact path={"/about"}>
            <About />
          </Route>
        <Route exact path={"/login"}>
          <Login/>
        </Route>
        <Route exact path={"/register"}>
          <Register />
        </Route>
        </Switch>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
