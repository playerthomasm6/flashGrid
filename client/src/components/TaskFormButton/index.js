import React from "react";


function TaskFormButton(props) {
   
    return (
        <button 
        onClick={() => props.loadTaskForm()}
        >
        Create a new task

        </button>
    );
}

export default TaskFormButton;