import React from "react";
import "./styles.css";

function ProjectsNav() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col project-bar">This is where the project names go</div>
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
