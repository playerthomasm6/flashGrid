import React, { useState, useEffect } from "react";
import "./style.css";
import Column from "../Column";

function ProjectsContainer() {
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState({
        currentProject : ""
    });
    
    useEffect(() => {
        setProjects(data);
        console.log(data);
    }, []);

    const data = [
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            description: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Assign tasks",
            taskDescription: "Assign tasks to each team member",
            taskPersonel: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },
        {
            userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            description: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Create Project Page",
            taskDescription: "write code for project page",
            taskPersonel: "Thomas",
            taskDueDate: "02/11/2021",
            taskComplete: false
        },


        {

            name: "Radical Gamez",
            description: "Radical Gamez is a app that lets users do things",
            tasks: [
                
                    {
                        name: "Talk about stuff",
                        description: "Assign tasks to each team member",
                        personel: "Thomas",
                        dueDate: "02/11/2021",
                        complete: false
                    }
                
            ]
        },
    ];

   function handleNow (event) {
    const value = event.target.getAttribute("value");
    const name = event.target.getAttribute("name");
    
    console.log(value + name)
    setCurrentProject({currentProject: value});
    console.log(currentProject)
   }

    // function setProject(value, name) {
        
    //     setcurrentProject({ [name]: value });
    //     console.log(currentProject)
    // }

    return (
        <div className="container-fluid space-out">

            <div className="row">
                <Column>
                    <h5>Projects</h5>
                    {projects.map(item => (
                        <div>
                            <p
                            name="currentProject" 
                            value={item.name}
                            onClick={(event) => setCurrentProject({currentProject : event.target.getAttribute("value")})}
                            key={item.name}
                            data={item.name}

                            >{item.name}</p>
                        </div>
                        
                    ))}
                </Column>

                <Column>
                    <h5>Tasks</h5>
                    {projects.map(item => (
                        <div>
                            {item.tasks.map(task => (
                                <div>
                                    <h6 key={task.name}>{task.name}</h6>
                                    <p>{task.description}</p>
                                    </div>
                            ))}
                      
                        </div>
                        ))}
                        
                </Column>

                <Column>
                    <h5>Personel</h5>
                                <button onClick={console.log(currentProject)}>Click Me</button>
                </Column>

                <Column>
                    <h5>Due Date</h5>

                </Column>

                <Column>
                    <h5>Complete</h5>

                </Column>
            </div>

        </div>
    );
}

export default ProjectsContainer;