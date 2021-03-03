/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./style.css";
import Column from "../Column";
import API from "../../utils/API";
import ModalForm from "../Modal";
import RenderForm from "../RenderForm";
import TaskFormButton from "../TaskFormButton";
import ProjectForm from "../ProjectForm";


function ProjectsContainer(props) {
  const [user, setUser] = useState({})
  const [projectNameList, setProjectNameList] = useState([]);
  const [projects, setProjects] = useState([]); // SETS PROJECTS AFTER FILTER BY USERNAME
  const [userProjects, setUserProjects] = useState([]); // SETS PROJECT LIST PRIOR TO FILTER FROM USER PROJECTS
  const [currentProject, setCurrentProject] = useState([]);
  const [taskForm, setTaskForm] = useState();
  const [taskFormBoolean, setTaskFormBoolean] = useState(false); // USE TO DECIDE TO RENDER THE FORM OR BUTTON
  const [clickedProject, setClickedProject] = useState(false); // USE TO DECIDE TO RENDER THE FORM OR BUTTON
  const [formState, setFormState] = useState({}); // USE TO COLLECT TASK FORM INPUT VALUES
  const [projectForm, setProjectForm] = useState({}) // USE TO COLLECT PROJECT FORM INPUT VALUES
  const [active, setActive] = useState(false) //USE FOR SETTING ACTIVE CLASS

  const signedInUser = localStorage.getItem('signedInUser')


  useEffect(() => {

    loadProjects(); // ON LOAD OF PAGE API CALL TO GET ALL PROJECTS WILL BE CALLED
    console.log("The user " + signedInUser + " is loggined in...")
  }, []);

  useEffect(() => {

    filterProjectsUserName(); // IF userProjects IS CHANGED 

  }, [userProjects]);

  // sets the project name list when the projects changes
  useEffect(() => {
    const NameList = projects.map(item => {
      return (
        item.projectName
      )
    });
    setUser({ userName: signedInUser })
    setProjectNameList([...new Set(NameList)]);
  }, [projects])
  
  
  const loadProjects = () => { // LOADS ALL PROJECTS FROM THE API
    API.getProjects().then(res => setUserProjects(res.data));
  };

  const filterProjectsUserName = () => {
    console.log(user.userName)
    const filteredUserProjects = userProjects.filter(project => user.userName === project.userName)
    setProjects(filteredUserProjects)
  }

  
  function findProject(e, item) { // FILTERS ALL TASKS WITH THE CLICK ON PROJECT NAME
    setTaskFormBoolean(false)
    setClickedProject(true);
    const foundProject = projects.filter(project => item === project.projectName)
    setCurrentProject(foundProject)

  }

  

  const data = [
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Flash Grid",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Flash Grid",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Create project page",
      taskDescription: "write code to render information on the project page",
      taskAssigne: "Thomas",
      taskDueDate: "02/28/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Flash Grid",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Project Page CSS",
      taskDescription: "Utilize CSS to format the project page",
      taskAssigne: "John",
      taskDueDate: "02/28/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Flash Grid",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    },
    {
      userName: "mathewHarris@gmail.com",
      projectName: "Radical Gamez",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Tipster",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Tipster",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Other Project",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    },
    {
      userName: "playerthomasm6@gmail.com",
      projectName: "Final Project",
      projectDescription:
        "Flash Grid is a project management web app to help organize tasks and personel",
      taskName: "Assign tasks",
      taskDescription: "Assign tasks to each team member",
      taskAssigne: "Thomas",
      taskDueDate: "02/11/2021",
      taskComplete: false
    }
  ];

  

  // function handleInputChange(event) {
  //     const { name, value } = event.target;
  //     setFormObject({...formObject, [name]: value})
  //   };



  // =============================================================================================================
  // |         CRUD FUNCTIONS        |      DELETE      |     CREATE      |     EDIT      |
  // =============================================================================================================

  function deleteThatTask(id) { // DELETE TASK BY ID
    console.log(id);
    API.deleteTask(id)
      .then(res => {
        console.log('fire1')
        loadProjects()
      })
      .then(() => {
        console.log('fire2')
        console.log(currentProject[0].projectName)
        findProject("bullshit", currentProject[0].projectName)
      })
      .then(() => {
        const newTasks = currentProject.filter((task) => task._id !== id);
        setCurrentProject(newTasks);
      })
      .catch(err => console.log(err));
  }

  function handleFormInput(event) { // HANDLES TASK FORM INPUTS
    const { name, value } = event.target

    setFormState({ ...formState, [name]: value })
  }

  const submitNewTask = (e) => { // CREATE NEW TASK
    e.preventDefault();
    console.log("New Task Created");

    console.log(formState)

    const task = {
      userName: currentProject[0].userName,
      projectName: currentProject[0].projectName,
      projectDescription: currentProject[0].projectDescription,
      taskName: formState.taskName,
      taskDescription: formState.taskDescription,
      taskAssigne: formState.taskAssigne,
      taskDueDate: formState.taskDueDate,
      taskComplete: false
    }
    API.saveTask(task)
      .then(res => loadProjects())
      .then(() => {setCurrentProject([...currentProject, task]);})
      .then(() => setTaskFormBoolean(false))
      .then(() => setFormState({}))
      .catch(err => console.log(err));
  }


  function handleProjectFormInput(event) { // HANDLES TASK FORM INPUTS
    const { name, value } = event.target

    setProjectForm({ ...projectForm, [name]: value })
    console.log(projectForm)
  }


  const createNewProject = () => { // CREATE NEW PROJECT
    console.log("Project Created!!... unless it wasn't?  No?  Ok I will look into it");
    const newProject = {
      // userName: user.userName,
      userName: user.userName,
      projectName: projectForm.projectName,
      projectDescription: projectForm.projectDescription,
      taskName: "Create tasks for your new project!",
      taskDescription: "Describe your tasks!",
      taskAssigne: "Assign someone the task",
      taskDueDate: "2021-05-15T04:00:00.000Z",
      taskComplete: false
    }
    API.saveTask(newProject)
      .then(res => loadProjects())
      // .then(() => {setCurrentProject([...currentProject, newProject]);})
      .then(() => setTaskFormBoolean(false))
      .then(() => setFormState({}))
      .catch(err => console.log(err));

  }

// ==================================================================================================================




  function handleNow(event) {
    const value = event.target.getAttribute("value");
    const name = event.target.getAttribute("name");

    console.log(value + name);
    setCurrentProject({ currentProject: value });
    console.log(currentProject);
  }

  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState({});
  
  const handleClose = () => setShow(false);
  const handleEditBtn = eData => {
    setShow(true);
    setEditData(eData);
  };

  const loadTaskForm = () => {
    console.log("it worked")
    setTaskFormBoolean(true)
  }

  

  function handleFormInput(event) {
    const { name, value } = event.target

    setFormState({ ...formState, [name]: value })
  }


  
  const getForm = () => { // checks for boolean state and renders either form or button which changes the boolean state to render the form
    
    if ((taskFormBoolean) && (clickedProject)) {
      return <RenderForm
        formState={formState}
        submitNewTask={(e) => submitNewTask(e)}
        handleFormInput={(e) => handleFormInput(e)}
      />
    } else if ((!taskFormBoolean) && (clickedProject)) {
      return <TaskFormButton
        loadTaskForm={() => loadTaskForm()}
      />
    }
  }

  const getProjectForm = () => { // checks for boolean state and renders either form or button which changes the boolean state to render the form
    if (!taskFormBoolean) {
      return <ProjectForm
        projectForm={projectForm}
        createNewProject={(e) => createNewProject(e)}
        handleProjectFormInput={(e) => handleProjectFormInput(e)}
      />
    } else {
      return <TaskFormButton
        loadTaskForm={() => loadTaskForm()}
      />
    }
  }

  const makeActive = (item) => {
    if(item === item) {
      return "active pointer"
    } else {
      return "pointer"
    }
  }

  function refreshPage() {
    window.location.reload(false)
  }
// this function runs when click Sav on modal
 function editDataSave(){
     console.log("worked edit") 
     console.log(editData._id)
     let id = editData._id
    API.editTask(id, editData)
    .then(res => {
      console.log(res)
      handleClose()
      refreshPage()
      })
  

     }

// This function sets new data to the state. 
  function editChangeData(event){
    const newTarget = event.target.name
    const newValue = event.target.value
     
      console.log(event.target.name)
      console.log(event.target.value)
      
      const data= {...editData, [`${newTarget}`]:newValue}
      setEditData(data)
      console.log(editData)
     }



// ===================================================================================================
// RETURN | RENDER  |
// ===================================================================================================
  return ( 
    <>
      <ModalForm show={show} handleClose={handleClose} editData={editData} editDataSave={editDataSave} editChangeData={editChangeData} />
      <div className="container-fluid space-out">
        <h6>Current User: {user.userName}</h6>
        {/* <button onClick={() => createNewProject()}>Create Project</button> */}

        <div className="row">
          <div className="col-sm-2">
          <table class="table striped bordered hover">
              <thead>
                <tr>
                  <th scope="col"><h4 className="align-center">Projects</h4></th>
                </tr>
              </thead>
              <tbody>

            {
            
            projectNameList.map(item => (
              <tr>
              <td
                className="pointer"
                key={item + "1"}
                value={item}
                // name={item.userName}
                onClick={event => {findProject(event, item)}}
              > <h5 
              id={item}
              className="align-center">{item}</h5>
                
              </td>
              
              </tr>
            ))}
                
            </tbody>
            </table>
          </div>

          <div className="col-sm-10">
            <table class="table striped bordered hover">
              <thead>
                <tr>
                  <th scope="col"><h4 className="align-center">Task Name</h4></th>
                  <th scope="col"><h4 className="align-center">Description</h4></th>
                  <th scope="col"><h4 className="align-center">Assigned Personel</h4></th>
                  <th scope="col"><h4 className="align-center">Due Date</h4></th>
                  <th scope="col"><h4 className="align-center">Manage</h4></th>
                </tr>
              </thead>
              <tbody>
                {currentProject.map(item => (
                  <tr
                  key={item._id}
                  >
                    <td 
                    id={item._id} 
                    name="taskName">
                      <h6 className="align-center">{item.taskName}</h6>
                      
                    </td>

                    <td> 
                      <p className="align-center">
                      {item.taskDescription}
                      </p>
                    </td>

                    <td><h6 className="align-center">{item.taskAssigne}</h6></td>

                    <td>
                      <h6 className="align-center">{item.taskDueDate}</h6>{" "}
                      
                    </td>

                    <td>
                      <div className="align-center">
                    <button onClick={() => handleEditBtn(item)}>Edit</button>
                    <button className="delete-button align-center" value={item._id} onClick={e => deleteThatTask(e.target.value)}>[X]</button>
                    </div>
                    </td>
                  </tr>
                ))}

                
              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-12">{getForm()}</div>
              
              </div>
          </div>
        </div>
            <div className="row">
              <div className="col-sm-12">
              
              {getProjectForm()}
              </div>
            </div>
      </div>
    </>
  );
}

export default ProjectsContainer;
