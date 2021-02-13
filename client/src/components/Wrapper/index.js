import React,{useState} from 'react';
import "./styles.css";

function Wrapper() {
    const[about, setAbout] = useState(false);
    const[flashgrid, setShow] = useState(false);
    return (
        <div className = "col-sm-12 into-btn"> 
            {
            flashgrid?<p>FlashGrid is an project managemnt tool that helps industries to manage the projects,tasks and team plannings. </p>:null
            }
            <button onClick={()=>setShow(!flashgrid)}>What is flashgrid</button>

            <div className = "col-sm-12 about-btn"></div>

            {
             about?<p>Our team is commited to do the work tranparently and having fun along the way we developed this application.</p>:null
            }
            {
            about?<p>We offer our customers a platform to manage their projects. The admin will have the permission to create the project. After a project is created it can be broken down into multiple tasks. As the tasks are created those tasks are assigned to ther persons who are working on them.</p>:null
            }
            <button onClick={()=>setAbout(!about)}>About Us</button>
        </div>


    )
}

export default Wrapper;
