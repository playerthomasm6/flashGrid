import React from "react";
import "./styles.css";

function ProjectsNav() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col project-bar">
                        <div className="row">
                            <div className="col heading">
                                <h3>Projects</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col highlight">
                                <h4>FlashGrid</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col project-bar">
                        <div className="row">
                            <div className="col heading">
                                <h3>Tasks</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col highlight">
                                <h4>Backend</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Frontend</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col project-bar">
                        <div className="row">
                            <div className="col heading">
                                <h3>Sub Tasks</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col highlight">
                                <h4>Server setup</h4>
                                <p>Setup the server.js file to so that it connects to the database.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>projectsController</h4>
                                <p>set up the projectsController file so that we can access the database information.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col tasks-bar">This is where the tasks go</div>
                    <div className="col sub-tasks-bar">This is where the subtasks go</div>
                    <div className="col people">this is where assigned persons go</div>
                    <div className="col due-date">This is where the due dates go</div>
                    <div className="col complete">This is where the completed mark go</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsNav;
