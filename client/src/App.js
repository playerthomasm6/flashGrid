import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/home.js"
import MyProjects from "./pages/myProjects.js";

function App() {
  return (
    
    <Router>
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
