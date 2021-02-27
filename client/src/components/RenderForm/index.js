import React from "react";
// import "./styles.css";

function RenderForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="task-name">Task Name</label>
        <input
          type="text"
          className="form-control"
          id="task-name"
          {...props}
          placeholder="Task Name..."
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="task-description">Describe the task</label>
        <input
          type="text"
          className="form-control"
          id="task-description"
          placeholder="Description..."
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="task-assigne">Who will complete the task?</label>
        <input
          type="text"
          className="form-control"
          id="task-assigne"
          placeholder="Assigne..."
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="task-due-date">When is this task due?</label>
        <input
          type="text"
          className="form-control"
          id="task-due-date"
          placeholder="Due Date..."
        ></input>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RenderForm;
