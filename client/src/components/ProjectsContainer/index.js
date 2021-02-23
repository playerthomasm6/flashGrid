import React, { useState, useEffect } from "react";
import "./style.css";
import Column from "../Column";
import API from "../../utils/API"

function ProjectsContainer() {
    const [user, setUser] = useState({})
    const [projectNameList, setProjectNameList] = useState([]); 
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState([]);
    
    useEffect(() => {
        // This will not be hard coded once the log in system is up and running.
        setProjects(data);
        console.log(data);
        // renderProjects();
    }, []);

    
    function findProject(e, item) {
        const foundProject = projects.filter(project => item === project.projectName)
        setCurrentProject(foundProject)
        console.log(user.userName)
        console.log(currentProject.userName)
    }
    // sets the project name list when the projects changes
    useEffect(() => {
        const NameList = projects.map(item => {
            return (
                item.projectName
            )
        });
        setUser({userName: "playerthomasm6@gmail.com"})
        setProjectNameList([...new Set(NameList)]);
    }, [projects])

    const data = [
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Create project page",
            taskDescription: "write code to render information on the project page",
            taskAssigne: "Thomas",
            taskDueDate: "02/28/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Project Page CSS",
            taskDescription: "Utilize CSS to format the project page",
            taskAssigne: "John",
            taskDueDate: "02/28/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "mathewHarris@gmail.com",
            projectName: "Radical Gamez",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Tipster",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Tipster",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Other Project",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Final Project",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskAssigne: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
    ];

 

   function handleNow (event) {
    const value = event.target.getAttribute("value");
    const name = event.target.getAttribute("name");
    
    console.log(value + name)
    setCurrentProject({currentProject: value});
    console.log(currentProject)
   }

    return (
        <div className="container-fluid space-out">
            <h6>Current User: {user.userName}</h6>

            <div className="row">
                <div className="col-sm-2">
                <h5>Projects</h5>
                </div>
            
                <div className="col-sm-2">
                <h5>Tasks</h5>
                </div>
                
                <div className="col-sm-2">
                <h5>Description</h5>
                </div>

                <div className="col-sm-2">
                <h5>Assigned Personel</h5>
                </div>

                <div className="col-sm-2">
                <h5>Due Date</h5>
                </div>

                <div className="col-sm-2">
                <h5>Due Date</h5>
                </div>
                
                
            </div>

            <div className="row">

                <div classname="col-sm-2">
                {projectNameList.map(item => (
                        <p className="pointer"
                        key={item + "1"}
                        value={item}
                        name={item.userName}
                        onClick={(event) => findProject(event, item)}
                        >{item}</p>
                        
                    ))}
                </div>
                
                     {currentProject.map(item => (
                         <div>
                            <div className="col-sm-2">
                            <p>{item.taskName}</p>
                            </div>

                            
                            <div className="col-sm-2">
                            <p> {item.taskDescription}</p>
                            </div>
                        

                            <div className="col-sm-2">
                            <p>{item.taskAssigne}</p>
                            </div>
                            
                            
                            <div className="col-sm-2">
                            <p>{item.taskDueDate}</p>
                            </div>

                            <div className="col-sm-2">
                            <p>{item.taskDueDate}</p>
                            </div>  
                        </div>
                         
                    ))} 
            
                
            </div>

        </div>
        
    );
}

export default ProjectsContainer;