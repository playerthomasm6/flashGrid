// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar";
// eslint-disable-next-line no-unused-vars
//import HelloFlashGrid from "../components/HelloFlashGrid";
// import projects from "../projects.js"
import ProjectsContainer from "../components/ProjectsContainer";

function MyProjects(props) {
    
    return (
        <div>
            <Nav />
            <ProjectsContainer/>
        

        </div>
    );
}


export default MyProjects;
