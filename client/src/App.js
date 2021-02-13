import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/home.js"
import MyProjects from "./pages/myProjects.js";
import Application from "./pages/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    
    <Router>
      <UserProvider>
      <Application />
    </UserProvider>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
            </Route>

            <Route exact path={"/projects"}>
            <MyProjects/>
            </Route>

            <Route exact path={"/about"}>
            <MyProjects/>
            </Route>
        </Switch>
       
      </div>
    </Router>

  );
}

export default App;
