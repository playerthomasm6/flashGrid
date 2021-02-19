// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar";
// eslint-disable-next-line no-unused-vars
//import HelloFlashGrid from "../components/HelloFlashGrid";
import projects from "../projects.js"

function MyProjects() {
    
    return (
        <div>
            <h1>This is projects!!!!!!!</h1>
            <Nav />
            <div className>
                    <p>
                        {projects.projectName}
                    </p>
                    <p>
                        {projects.description}
                    </p>
                    <p>
                        {projects.synopsis}
                    </p>
                    <p>
                        {projects.date}
                    </p>
                </div>
        

        </div>
    );
}


export default MyProjects;
