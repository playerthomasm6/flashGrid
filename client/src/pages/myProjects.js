import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar";
import HelloFlashGrid from "../components/HelloFlashGrid";
import ProjectsContainer from "../components/ProjectsContainer";
import TasksContainer from "../components/TasksContainer";

function MyProjects() {
    
    return (
        <div>
            <Nav />
            <ProjectsContainer/>
        </div>

    );
}


export default MyProjects;
