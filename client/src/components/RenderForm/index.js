import React from "react";
// import "./styles.css";

function RenderForm (props) {

   return(
            <form>
                <div className="form-group">
                    <label htmlFor="task-name">Task Name</label>
                    <input type="text" className="form-control" id="task-name" name="taskName" placeholder="Task Name..."
                    value={props.formState.taskName}
                    onChange={(e) => props.handleFormInput(e)}
                    ></input>
                        
                </div>
                    <div className="form-group">
                        <label htmlFor="task-description">Describe the task</label>
                        <input type="text" className="form-control" id="task-description" name="taskDescription" placeholder="Description..."
                        value={props.formState.taskDescription}
                        onChange={(e) => props.handleFormInput(e)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="task-assigne">Who will complete the task?</label>
                        <input type="text" className="form-control" id="task-assigne" name="taskAssigne" placeholder="Assigne..."
                        value={props.formState.taskAssigne}
                        onChange={(e) => props.handleFormInput(e)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="task-due-date">When is this task due?</label>
                        <input type="text" className="form-control" id="task-due-date" name="taskDueDate" placeholder="Due Date..."
                        value={props.formState.taskDueDate}
                        onChange={(e) => props.handleFormInput(e)}></input>
                    </div>
                        
                            <button type="submit" className="btn btn-primary"
                            onClick={(e) => props.submitNewTask(e)}
                            >Submit</button>
            </form>
        )
}

export default RenderForm;