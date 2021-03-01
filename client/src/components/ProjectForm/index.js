import React from "react";
// import "./styles.css";

function ProjectForm (props) {

   return(
            <form>
                <div className="form-group">
                    <label htmlFor="project-name">Project Name</label>
                    <input type="text" className="form-control" id="project-name" name="projectName" placeholder="Project Name..."
                    value={props.projectForm.projectName}
                    onChange={(e) => props.handleProjectFormInput(e)}
                    ></input>
                        
                </div>
                    <div className="form-group">
                        <label htmlFor="project-description">Describe the Project</label>
                        <input type="text" className="form-control" id="project-description" name="projectDescription" placeholder="Description..."
                        value={props.projectForm.projectDescription}
                        onChange={(e) => props.handleProjectFormInput(e)}
                        ></input>
                    </div>
                    
                        
                            <button type="submit" className="btn btn-primary"
                            onClick={(e) => props.createNewProject(e)}
                            >Submit</button>
            </form>
        )
}

export default ProjectForm;