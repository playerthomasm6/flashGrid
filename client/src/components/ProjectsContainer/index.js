import React, { useState, useEffect } from "react";
import "./style.css";
import Column from "../Column";
import API from "../../utils/API";
import RenderForm from "../RenderForm";
import TaskFormButton from "../TaskFormButton";


function ProjectsContainer() {
    const [user, setUser] = useState({})
    const [projectNameList, setProjectNameList] = useState([]);
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState([]);
    const [test, setTest] = useState({});
    const [taskForm, setTaskForm] = useState();
    const [taskFormBoolean, setTaskFormBoolean] = useState(false);
    const [formState, setFormState] = useState({taskName: "a", taskDescription: "b"});

    useEffect(() => {
        // This will not be hard coded once the log in system is up and running.
        setProjects(data);
        loadProjects();
        //formTime();
        // .catch(err => console.log(err)));
        // renderProjects();
    }, []);

   /* useEffect(() => {
        formTime();

    }, [taskFormBoolean]);*/

    // useEffect(() => {
    //     console.log(formState)

    // }, [formState]);


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
        setUser({ userName: "playerthomasm6@gmail.com" })
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

    const loadProjects = () => {
        API.getProjects()
            .then(res =>
                setProjects(res.data));
    }


    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({...formObject, [name]: value})
    //   };


    // DELETE TASK
    // ==========================
    function deleteThatTask(id) {
        console.log(id);
        API.deleteTask(id)
            .then(res => loadProjects())
            .catch(err => console.log(err));
    }

    

    // CREATE TASK
    // ==========================
     function createNewTask() {
                                console.log(currentProject)
         const task= {
                                userName: "playerthomasm6@gmail.com",
            projectName: "Flash Grid",
            projectDescription: "Flash Grid is a project management web app to help organize tasks and personel",
            taskName: "Make Table",
            taskDescription: "Make A table",
            taskAssigne: "Mathew",
            taskDueDate: "02/28/2021",
            taskComplete: false
         }
         API.saveTask(task)
         .then(res => loadProjects())
            .catch(err => console.log(err));
     }

    function handleNow(event) {
        const value = event.target.getAttribute("value");
        const name = event.target.getAttribute("name");

        console.log(value + name)
        setCurrentProject({currentProject: value });
        console.log(currentProject)
    }

    const loadTaskForm = () => {
        console.log("it worked")
       setTaskFormBoolean(true)
    }

    const submitNewTask = (e) => {
        e.preventDefault();
        console.log("it worked");
        const taskName = e.target.getAttribute("form-control").getNamedItem("task-name");
        console.log(taskName.value)

        
        // API.saveTask()
        // .then(res => loadProjects())
        //    .catch(err => console.log(err));
    }

    function handleFormInput (event) {
        const {name, value} = event.target
        
        setFormState({...formState, [name] : value})
    } 

    const getForm = () => {
    if (taskFormBoolean) {
        return <RenderForm
        formState={formState}
        submitNewTask={(e) => submitNewTask(e)}
        handleFormInput ={(e) => handleFormInput(e)}
        />
    } else {
        return <TaskFormButton
       loadTaskForm ={() => loadTaskForm()}
        />
    }
}



    return (
        <div className="container-fluid space-out">
                                <h6>Current User: {user.userName}</h6>

                                <div className="row">


                                </div>

                                <div className="row">

                                    <div className="col-sm-2">
                                        <table className="table striped bordered hover">
                                            <thead>
                                                <tr>
                                                    <th>Projects</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {projectNameList.map(item => (
                                                    <tr>
                                                        <td className="pointer"
                                                            key={item}
                                                            value={item}
                                                            name={item.userName}
                                                            onClick={(event) => findProject(event, item)}
                                                        >{item}</td>
                                                    </tr>
                                                ))}

                                            </tbody>


                                        </table>
                                    </div>


                                    <div className="col-sm-10">
                                        <table class="table striped bordered hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Tasks</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Assigned Personel</th>
                                                    <th scope="col">Due Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {currentProject.map(item => (
                                                    <tr>
                                                        <td
                                                            key={item._id}
                                                            id={item._id}
                                                            name="taskName" >
                                                            {item.taskName}
                                                            <button
                                                                value={item._id}
                                                                onClick={(e) => deleteThatTask(e.target.value)}>X</button>

                                                        </td>

                                                        <td key={item.taskDescription}> {item.taskDescription}</td>

                                                        <td key={item.taskAssigne}>{item.taskAssigne}</td>

                                                        <td key={item.taskDueDate}>{item.taskDueDate}</td>

                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td>
                                                        <button
                                                            onClick={() => createNewTask()}
                                                        >Create New Task for</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                                    <div>
                                                    {getForm()}
                                                    </div>
                                            
                                    </div>




                                </div>

                            </div>

    );
}

export default ProjectsContainer;